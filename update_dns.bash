#!/usr/bin/env bash
api_token=$(cat key.txt)
email="nazucca7@gmail.com"
zone_name="nicozucca.com"
dns_record="nicozucca.com"

set -e

user_id=$(curl -s \
	-X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
	-H "Authorization: Bearer $api_token" \
	-H "Content-Type:application/json" \
	| jq -r '{"result"}[] | .id')

zone_id=$(curl -s \
	-X GET "https://api.cloudflare.com/client/v4/zones?name=$zone_name&status=active" \
	-H "Content-Type: application/json" \
	-H "X-Auth-Email: $email" \
	-H "Authorization: Bearer $api_token" \
	| jq -r '{"result"}[] | .[0] | .id')

record_data=$(curl -s \
	-X GET "https://api.cloudflare.com/client/v4/zones/$zone_id/dns_records?type=A&name=$dns_record"  \
	-H "Content-Type: application/json" \
	-H "X-Auth-Email: $email" \
	-H "Authorization: Bearer $api_token")

record_id=$(jq -r '{"result"}[] | .[0] | .id' <<< $record_data)
cf_ip=$(jq -r '{"result"}[] | .[0] | .content' <<< $record_data)
ext_ip=$(curl -s -X GET -4 https://ifconfig.co)

if [[ $cf_ip != $ext_ip ]]; then
	result=$(curl -s \
		-X PUT "https://api.cloudflare.com/client/v4/zones/$zone_id/dns_records/$record_id" \
		-H "Content-Type: application/json" \
		-H "X-Auth-Email: $email" \
		-H "Authorization: Bearer $api_token" \
		--data "{\"type\":\"A\",\"name\":\"$dns_record\",\"content\":\"$ext_ip\",\"ttl\":1,\"proxied\":false}" \
		| jq .success)
	if [[ $result == "true" ]]; then
		echo "$dns_record updated to: $ext_ip"
		exit 0
	else
		echo "$dns_record update failed"
		exit 1
	fi
else
	echo "$dns_record already up do date"
	exit 0
fi

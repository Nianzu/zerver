# Zerver

A server to host my website, web projects, and teach me about rust!

## Implemented Features
* Basic website hosting
* Fancy landing screen

## Desired Features
- [ ] Environment loader
- [x] Server-side includes
- [x] HTTPS

## Technologies

### Server-side includes
This webserver inplements serverside includes. This allows you to define something like a sidebar in one place, and then have that be populated on the webpage as its being served to the client.

```
<!-- #include sidebar.html -->
```
This is done using include statements as above to load specified files.

We also have the ability to provide arguments to the SSI, such as below. Here, the image name `processed6.png` is substituded in place of all `$1` tags in the SSI target file. This allows a widget-like structure for HTML/CSS/JS development.
```
<!-- #include image.html images/processed6.png -->
```

```
<a href="#$1"><img src="$1" alt="" height="300" width="300"></a>
<a href="#!" class="lightbox" id="$1"><img src="$1" alt=""></a>
```

And of course, there are error checks and saftey mesures in place to make sure this can't be abused.

## Getting Started
TODO write this section
- Add the dns updater as a cron job `crontab -e`:
```
*/1 * * * *    ~/zerver/update_dns.bash > /dev/null

```

- Generate keys using certbot:
```
https://certbot.eff.org/instructions?ws=other&os=snap
sudo certbot certonly --standalone --key-type rsa
sudo openssl rsa -in /etc/letsencrypt/live/nicozucca.com/privkey.pem -out /etc/letsencrypt/live/nicozucca.com/privkey_rsa.pem
```

- Or generate dev keys using openssl:
```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes
openssl rsa -in key.pem -out key_rsa.pem
```

### Compile

## To-Do
- [x] Landing page
- [x] Home page
- [x] About
	- [x] Don't like that it feels like a resume section
	- [x] Don't like how the link looks
    - [ ] Missing some content
- [x] Navie
	- [x] Missing images
	- [x] Missing lots of gifs
	- [ ] Missing discussions about decisions
- [x] Translation Website
	- [x] Missing lots of gifs
	- [x] Update paragraphs
- [x] Ocean sheild
- [ ] Zerver
- [ ] SimAn
- [ ] SCOT
- [ ] BLDC Shit
- [x] 3D Printing stuff
	- [x] Showcase
	- [x] Link to thangs 
- [x] Mechanical design
	- [x] Hummingbird feeder
- [x] Resume
	- [x] update
- [ ] Projects

## Contributions

I normally say that contributions are welcome, but you really shouldn't use this or contribute to it. I make no claims. This might burn down your PC, summon the FBI to your door, and start a botnet that neither you nor I can control. Buyer beware.

## License

This project is not currently licensed; it will not be lisenced. Do with it what you want.

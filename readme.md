# Zerver

A server to host my website, web projects, and teach me about rust!

## Implemented Features
* Basic website hosting
* Fancy landing screen

## Desired Features
- [ ] Environment loader
- [x] Server-side includes
- [ ] HTTPS

## Technologies

### Server-side includes
This webserver inplements serverside includes. This allows you to define something like a sidebar in one place, and then have that be populated on the webpage as its being served to the client.

```
<!-- #include sidebar.html -->
```
This is done using include statements as above to load specified files.

And of course, there are error checks and saftey mesures in place to make sure this can't be abused.

## Getting Started
TODO write this section
- Add the dns updater as a cron job `crontab -e`:
```
*/1 * * * *    ~/zerver/update_dns.bash > /dev/null

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
- [ ] Translation Website
	- [ ] Missing lots of gifs
	- [ ] Update paragraphs
- [x] Ocean sheild
- [ ] Zerver
- [ ] SimAn
- [ ] SCOT
- [ ] BLDC Shit
- [x] 3D Printing stuff
	- [x] Showcase
	- [x] Link to thangs 
- [ ] Mechanical design
	- [ ] Hummingbird feeder
- [x] Resume
	- [ ] update
- [ ] Projects

## Contributions

I normally say that contributions are welcome, but you really shouldn't use this or contribute to it. I make no claims. This might burn down your PC, summon the FBI to your door, and start a botnet that neither you nor I can control. Buyer beware.

## License

This project is not currently licensed; it will not be lisenced. Do with it what you want.

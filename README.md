# Udacity Processing Api Project

this node and express project will display thumbnails of images loaded into a file on your computer.

## setup

create a directory named assets. inside of assets place a directory called full. then another called thumb.
place full scale images in full. 

place the path to the assets folder in the src/routes/api.ts variable filehead.

run npm install on project

run project using npm start
in url use params id for the image name. width and height to resize.

such as http://localhost:3000/?id=encenadaport.jpg&height=100&width=200
# Icy polar opposites

## The challenge
NASA icy polar opposites challenge, details: https://2017.spaceappschallenge.org/challenges/planetary-blues/icy-polar-opposites/details

Design a data analysis and/or visualization tool to show the spatial and temporal changes in Arctic and Antarctic ice to a general audience.

## Our solution

Use NASA data to show changes in ice, gravity (incluenced by gravity) and compare the poles over time!

The app is live here: https://icypolaropposites.herokuapp.com/

## The tech

* Data exploration: `Jupyter + Python`
* Visualisation: `NodeJS + WebGL`
* Database: `MongoDB`

## Getting started

You can look at our data pre-processing and exploring [here](https://github.com/dmateusp/icy-polar-opposites/tree/master/exploration/notebooks)

## Structure of the website

* /presentation: the presentation with interactive data visualization
* /globe: 3D globe based on WebGL using Cesium.js visualizing sea ice data from NSIDC.org (National Snow and Ice Data Center)
* /api: See the api part below

## The api

   * `GET    /api/gravity/:limit`

Returns gravity data satisfying query in `q`. Example: `/gravity/20?q={"LONG": 42.3333}` to return all gravity information at the longitude 42.3333 (please refer to `MongoDB` query documentation for more)



   * `GET    /api/ice/:limit`

Returns ice data satisfying query in `q`. Example: `/ice/100?q={"thickness": {"$gt":20}}` to return all ice information of thickness greater than 20


   * `GET    /api/ice_nsdic:limit`

Returns ice data satisfying query in `q` from the National Snow and Ice Data Center. Example: `/ice_nsdic/100?q={"area": {"$gt":11}, "extent": {"$lt": 16}}` to return all ice information for area greater than 11 and extent lower than 16

NOTE:
1. There is a limit of 100 by default and no pagination for the data queried.

2. For development purpose you can use the following credential to gain read access to our database
  * user name: anybear
  * key: public

### Running your own server, for testing or to contribute :)
To start the web server:
* clone the repository
* open a terminal at the root of the project
* start MongoDB by issuing: `mongod --dbpath ./db`
* install dependencies `npm install`
* run the server `npm run dev`
* The server is running on port 8000

### Adding data

To add data we first explore the original data under `/exploration` using `Jupyter`. Then the data is processed, turned to JSON which is then added to the DB using: `mongoimport`

Then the API needs to be extended!

(Example: `mongoimport --db icy-poles -c ice --file IRMCR2_south.json --jsonArray`)

## Our sources for data (provided by NASA)

### Airborne Topographic Mapper:
A laser altimeter that measures the elevation of ice (Greenland / Antarctic ice sheets; Arctic / Antarctic sea ice).

Products vary from dense point clouds to general surface shape at specific times, to time series of how is the ice raising or lowering over time. Includes ice sheets and sea ice products.
* http://nsidc.org/data/ILATM1B
* http://nsidc.org/data/ILATM2
* http://nsidc.org/data/IDHDT4
* http://nsidc.org/data/ILNSA1B

### CReSIS radar:
Various frequencies of radar that shoot through the uppermost layers of the ice sheet (snow layer only; upper few meters; thousands of meters deep) and image internal layers within the ice, or in some cases, look all the way to the bedrock beneath the ice.
* http://nsidc.org/data/IRSNO1B
* http://nsidc.org/data/IRACC1B
* http://nsidc.org/data/IRMCR1B

### Digital Mapping System:
(DMS) – A downward-looking camera that captures tiny scenes.  The CAMBOT optical sensor precedes this, allowing a look farther back in time.
* http://nsidc.org/data/IODMS1B

### CAMBOT Optical sensor:
* http://nsidc.org/data/IOCAM1B

### ArcticDEM:
(digital elevation model) – This is a map of the land surface elevation for (nearly) the entire Arctic, at one snapshot in time.
* http://pgc.umn.edu/arcticdem

### IceBridge DEM:
This map of the land surface elevation captures multiple points in time.
* http://nsidc.org/data/ILVIS2

### Land, Vegetation and Ice Sensor(LVIS):
Measures the height of vegetation in the polar regions.
* http://nsidc.org/data/IODMS3

### Gravity anomalies from AIRGrav
 Measures how the gravity differs in local regions (which happens due to more or less local mass, e.g. mountains).
 
 AIRGrav is  an airborne gravimeter (an instrument for measuring the difference in the force of gravity from one place to another.)

* http://nsidc.org/data/IGGRV1B

### Another Ice data source (National Snow and Ice Data Center)
Measure area and extent of ice 

* ftp://sidads.colorado.edu/DATASETS/NOAA/G02135/

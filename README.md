# Icy polar opposites

## The challenge
NASA icy polar opposites challenge, details: https://2017.spaceappschallenge.org/challenges/planetary-blues/icy-polar-opposites/details

Design a data analysis and/or visualization tool to show the spatial and temporal changes in Arctic and Antarctic ice to a general audience.

## Our solution

Use NASA data to show changes in ice, gravity (incluenced by gravity) and compare the poles over time!

## The tech

* Data exploration: `Jupyter + Python`
* Visualisation: `NodeJS + WebGL`
* Database: `MongoDB`

## Format of the data

`TODO`

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
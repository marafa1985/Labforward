This Task was provided by Labforward, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## User Story
As a researcher, I would like to identify sudden peaks in my continuous time series data,
so that I can focus on important changes.

### Based on User Story:

We need to have a React compounent contains the following subComonents:

- Z-Score (ZValue Component): which define the data values that will represent signals peak.
- Data Values (IndicatorData): Which have to functionality: a) allow researcher to edit data value. b) reserach can add new values if needed.
- Data Chart (Actual Data): it chart represent the actual data values.
- Peak Chart (Areas of interest): which represent the peaks in the actual data.

## Definition of Done
- Unit tests passed: Task contains 7 testing unit to make sure that the usery story working as needed.
- Component tests.
- Code reviewed.
- Functional tests.
- UI Animation test.
- production reviewed.

## Deployment: Ubuntu

### Install Docker to Ubuntu

Please follow this Link to Install Docker in Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Once you installed Docker to the ubuntu you can start copy the source code to machine as the following

### Copy Surce Code
before you clone the package make sure that you installed git in ubuntu.

- Using github: 
```

git clone https://github.com/marafa1985/Labforward.git
```
- Copy the code over storage like USB. (not recommended)

### Deploy 
After the souce code Avaliable on the server you can ru the following command:

- Build Docker image to the ubuntu Machine

```
$ docker build -t labforward .
```
- Run Docker image for production, specify port 80  as a default

```
$ docker run -it -p 80:80 labforward
```

Else for test you can specify port 3030 as the following:

```
$ docker run -it -p 3030:80 labforward
```
Wait untill finished.

- Now you can open browser and goto url:

[http://localhost:3030/](http://localhost:3030/)


## e2e

For e2e Testing you can install [cypress.io](https://www.cypress.io/).

How to use cypress it [https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)



### Ambiguity

No ambiguity, since its open-ended.

"1 of 10", Since "1": page index. "10": Pages Count.

## Available Scripts

In the project directory, you can run:

## `npm start`

## `npm test`

## `npm run build`

## `npm run eject`

 



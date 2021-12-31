# postmen-ts

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)
[![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=axios)
[![npm downloads](https://img.shields.io/npm/dm/axios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=axios)


Postmen types for third-party use

## Installing

Using npm:

```bash
$ npm install postmen-ts
```

## Example Usage

```ts

import { CalculateRatesRequest, CalculateRatesResponse, Common, ShipperAccount, Shipment } from "postmen-ts";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

public Rate(shipment: any) {
    return new Promise<any> ((resolve, reject) => {
        const CalculateRatesRequest = {} as CalculateRatesRequest;
        CalculateRatesRequest.async = false;
        CalculateRatesRequest.is_document = false;
        CalculateRatesRequest.ship_date = new Date().toISOString().slice(0, 10);
        CalculateRatesRequest.shipment = this._mapShipment(shipment) as Shipment;
        CalculateRatesRequest.shipper_accounts = this._getShipperAccounts() as ShipperAccount[];

         this.axios.post(Common.Endpoint.Rates, CalculateRatesRequest)
        .then((response: AxiosResponse) => {
            const calculateRateResponse = response.data?.data as CalculateRatesResponse;
            resolve(calculateRateResponse);
        })
        .catch((error: any) => {
            reject(error);
        });
    });
}
```
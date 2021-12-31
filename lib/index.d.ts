export namespace Types {

    export type LengthUnit = 'cm' | 'in' | 'ft' | 'mm' | 'm' | 'yd';
    export type WeightUnit = 'g' | 'oz' | 'lb' | 'kg';
    export type Country = 'ABW'|'AFG'|'AGO'|'AIA'|'ALA'|'ALB'|'AND'|'ANT'|'ARE'|'ARG'|'ARM'|'ASM'|'ATA'|'ATF'|'ATG'|'AUS'|'AUT'|'AZE'|'BDI'|'BEL'|'BEN'|'BES'|'BFA'|'BGD'|'BGR'|'BHR'|'BHS'|'BIH'|'BLM'|'BLR'|'BLZ'|'BMU'|'BOL'|'BRA'|'BRB'|'BRN'|'BTN'|'BVT'|'BWA'|'CAF'|'CAN'|'CCK'|'CHE'|'CHL'|'CHN'|'CIV'|'CMR'|'COD'|'COG'|'COK'|'COL'|'COM'|'CPV'|'CRI'|'CUB'|'CUW'|'CXR'|'CYM'|'CYP'|'CZE'|'DEU'|'DJI'|'DMA'|'DNK'|'DOM'|'DZA'|'ECU'|'EGY'|'ERI'|'ESH'|'ESP'|'EST'|'ETH'|'FIN'|'FJI'|'FLK'|'FRA'|'FRO'|'FSM'|'GAB'|'GBR'|'GEO'|'GGY'|'GHA'|'GIB'|'GIN'|'GLP'|'GMB'|'GNB'|'GNQ'|'GRC'|'GRD'|'GRL'|'GTM'|'GUF'|'GUM'|'GUY'|'HKG'|'HMD'|'HND'|'HRV'|'HTI'|'HUN'|'IDN'|'IMN'|'IND'|'IOT'|'IRL'|'IRN'|'IRQ'|'ISL'|'ISR'|'ITA'|'JAM'|'JEY'|'JOR'|'JPN'|'KAZ'|'KEN'|'KGZ'|'KHM'|'KIR'|'KNA'|'KOR'|'KWT'|'LAO'|'LBN'|'LBR'|'LBY'|'LCA'|'LIE'|'LKA'|'LSO'|'LTU'|'LUX'|'LVA'|'MAC'|'MAF'|'MAR'|'MCO'|'MDA'|'MDG'|'MDV'|'MEX'|'MHL'|'MKD'|'MLI'|'MLT'|'MMR'|'MNE'|'MNG'|'MNP'|'MOZ'|'MRT'|'MSR'|'MTQ'|'MUS'|'MWI'|'MYS'|'MYT'|'NAM'|'NCL'|'NER'|'NFK'|'NGA'|'NIC'|'NIU'|'NLD'|'NOR'|'NPL'|'NRU'|'NZL'|'OMN'|'PAK'|'PAN'|'PCN'|'PER'|'PHL'|'PLW'|'PNG'|'POL'|'PRI'|'PRK'|'PRT'|'PRY'|'PSE'|'PYF'|'QAT'|'REU'|'ROU'|'RUS'|'RWA'|'SAU'|'SDN'|'SEN'|'SGP'|'SGS'|'SHN'|'SJM'|'SLB'|'SLE'|'SLV'|'SMR'|'SOM'|'SPM'|'SRB'|'SSD'|'STP'|'SUR'|'SVK'|'SVN'|'SWE'|'SWZ'|'SXM'|'SYC'|'SYR'|'TCA'|'TCD'|'TGO'|'THA'|'TJK'|'TKL'|'TKM'|'TLS'|'TON'|'TTO'|'TUN'|'TUR'|'TUV'|'TWN'|'TZA'|'UGA'|'UKR'|'UMI'|'UNK'|'URY'|'USA'|'UZB'|'VAT'|'VCT'|'VEN'|'VGB'|'VIR'|'VNM'|'VUT'|'WLF'|'WSM'|'YEM'|'ZAF'|'ZMB'|'ZWE'
    export type AddressType = 'business'|'residential';
    export type BoxType = 'custom'|'ups_10kg_box'|'ups_25kg_box'|'ups_bpm'|'ups_bpm_flat'|'ups_bpm_parcel'|'ups_express_box'|'ups_first_class'|'ups_flats'|'ups_irregulars'|'ups_large_express_box'|'ups_letter'|'ups_machinables'|'ups_media_mail'|'ups_medium_express_box'|'ups_pak'|'ups_parcel_post'|'ups_parcels'|'ups_priority'|'ups_small_express_box'|'ups_standard_flat'|'ups_tube'
    export type Currency = 'USD';
    export type Status = 'calculating'|'calculated'|'failed';
    export type Slug = 'apc-overnight'|'aramex'|'asendia-de'|'asendia-hk'|'australia-post'|'bluedart'|'bondscouriers'|'bpost-international'|'bpost'|'bring'|'canada-post'|'canpar'|'collectplus'|'courex'|'couriers-please'|'china-post'|'delhivery'|'dhl-discounted'|'dhl-germany'|'dhl-global-mail-asia'|'dhl'|'dotzot'|'dpd-be'|'dpd-nl'|'dpd-uk'|'dpd'|'dpex'|'dtdc'|'endicia'|'fastway-au'|'fedex-smartpost'|'fedex'|'global-express'|'gls-ireland'|'grab'|'hermes'|'hong-kong-post'|'landmark-global'|'malaysia-post'|'mondialrelay'|'new-zealand-post'|'newgistics'|'nightline'|'ninjavan'|'omniparcel'|'ontrac'|'parcelled-in'|'pitney-bowes'|'purolator'|'quantium'|'royal-mail'|'sendle'|'sf-express-ibs'|'sf-express-isp'|'sf-express'|'sfb2c'|'skynetworldwide'|'spain-correos-es'|'spanish-seur'|'spsr'|'star-track'|'taqbin-hk'|'taqbin-jp'|'tipsa'|'tnt'|'usps-discounted'|'usps'|'whistl'|'yodel'|'yunexpress'|'swiss-post'|'kerry-express-th'|'gojek'|'parcll'|'dhl-global-mail'|'chronopost-france'|'toll-priority'|'b2ceurope';
    export type PaperSize = '4x4'|'4x6'|'4x6.75'|'4x8'|'a4'|'default';
    export type MediaType = 'pdf'|'zpl';
    export type ServiceOptionType = 'cod'|'signature'|'adult_signature'|'indirect_signature'|'saturday_delivery'|'paperless_invoice'|'insurance'|'hold_for_pickup'|'pickup'|'rural_delivery'|'sameday_evening_delivery'|'overnight_evening_delivery'|'dangerous_goods'|'ppod'|'appointment'|'date_certain'|'evening'|'dry_ice'|'alcohol';
}

export namespace Constants {
    
        export enum Endpoint {
            Rates = '/rates',
            ShipperAccounts = '/shipper-accounts'
        }
    } 

//export namespace Interfaces {

    export interface Address  {
        country: Types.Country,
        contact_name: string,
        phone: string,
        fax: string,
        email: string,
        company_name: string,
        // company_url: string,
        street1: string,
        street2: string,
        street3: string,
        city: string,
        state: string,
        postal_code: string,
        type: Types.AddressType,
        tax_id: string,
        eori_number?: string
    }

    export interface BaseResponse  {
        meta: {
            code: number,
            message: string,
            details: any[],
            retryable: boolean
        }
    }

    export interface Billing  {

    }

    export interface CalculateRatesRequest  {
        shipment: Shipment,
        async: boolean,
        is_document: boolean,
        service_options: ServiceOptionDeliveryConfirmation|ServiceOptionInsurance[],
        shipper_accounts: Reference[],
        ship_date: string
    }

    export interface CalculateRatesResponse  {
        id: string,
        status: Types.Status
        rates: RateType[],
        created_at: string,
        created_by: string
    }

    export interface Customs  {

    }

    export interface DetailedCharge  {
        type: string,
        charge: Money
    }

    export interface Dimension  {
        width: number,
        height: number,
        depth: number,
        unit: Types.LengthUnit
    }

    export interface Invoice  {
        date: string,
        number: string,
        type: 'commercial'|'proforma'
        number_of_copies: number
    }

    export interface Item  {
        description: string,
        quantity: number,
        price: Money,
        item_id: string,
        origin_country: Types.Country,
        weight: Weight,
        sku: string,
        hs_code: string
    }

    export interface LabelRequest  {
        service_type: string,
        shipper_accounts: Reference,
        shipment: Shipment,
        async: boolean,
        return_shipment: boolean,
        paper_size: Types.PaperSize,
        file_type: Types.MediaType,
        ship_date: string,
        service_options: ServiceOption
        is_document: boolean,
        invoice: Invoice,
        references: string[],
        billing: Billing,
        customs: Customs,
        order_number: string,
        order_id: string
    }

    export interface Money  {
        amount: number,
        currency: Types.Currency
    }

    export interface Parcel  {
        box_type: Types.BoxType,
        dimension: Dimension,
        items: Item[],
        description: string,
        weight: Weight
    }


    export interface Rate  {
        shipper_account: ShipperAccountInformation,
        service_type: string,
        service_name: string,
        charge_weight: Weight,
        total_charge: Money,
        pickup_deadline: string,
        booking_cut_off: string,
        delivery_date: string,
        transit_time: number,
        detailed_charges: DetailedCharge[],
        info_message: string,
        error_message: string
    }

    export interface RateType  {
        shipper_account: ShipperAccountInformation,
        service_type: string,
        service_name: string,
        charge_weight: Weight,
        total_charge: Money,
        pickup_deadline: string,    // formatted date
        booking_cut_off: string,    // formatted date
        delivery_date: string,      // formatted date
        transit_time: number,
        detailed_charges: DetailedCharge[]
        info_message: string,
        error_message: string
    }

    export interface Reference  {
        id: string
    }

    export interface ReturnToAddress extends Omit<Address, 'eori_number' > {}

    export interface ServiceOption  {
        type: Types.ServiceOptionType
    }

    export interface ServiceOptionDeliveryConfirmation  {
        type: 'adult_signature'|'signature'
        enabled: boolean
    }

    export interface ServiceOptionInsurance  {
        type: 'insurance',
        insured_value: Money
    }

    export interface Shipment  {
        ship_from: Address,
        ship_to: Address,
        parcels: Parcel[],
        return: ReturnToAddress,
        delivery_instructions: string
    }

    export interface ShipperAccount  {
        id: string,
        description: string,
        slug: string,
        account_country: string,
        credentials: {
            account_number: string,
            preferred_currency: string,
            key: string,
            meter_number: string
        },
        status: "enabled" | "disabled",
        timezone: string,
        type: string,
        created_at: string,
        updated_at: string,
        account_balance: string,
        address: Address,
        settings: string,
        extra_info: {
            disallow_credentials_change: boolean,
            created_by_postmen: boolean,
            negotiated_rate: boolean
        }
    }

    export interface ShipperAccountInformation  {
        id: string,
        slug: Types.Slug,
        description: string
    }

    export interface ShipperAccountsResponse  {
        next_token: string,
        limit: number
        shipper_accounts: ShipperAccount[],
    }

    export interface Weight  {
        unit: Types.WeightUnit,
        value: number
    }
//}
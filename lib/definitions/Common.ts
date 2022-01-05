export namespace Common {
    export type LengthUnit = 'cm' | 'in' | 'ft' | 'mm' | 'm' | 'yd';
    export type WeightUnit = 'g' | 'oz' | 'lb' | 'kg';
    export type Country = 'ABW'|'AFG'|'AGO'|'AIA'|'ALA'|'ALB'|'AND'|'ANT'|'ARE'|'ARG'|'ARM'|'ASM'|'ATA'|'ATF'|'ATG'|'AUS'|'AUT'|'AZE'|'BDI'|'BEL'|'BEN'|'BES'|'BFA'|'BGD'|'BGR'|'BHR'|'BHS'|'BIH'|'BLM'|'BLR'|'BLZ'|'BMU'|'BOL'|'BRA'|'BRB'|'BRN'|'BTN'|'BVT'|'BWA'|'CAF'|'CAN'|'CCK'|'CHE'|'CHL'|'CHN'|'CIV'|'CMR'|'COD'|'COG'|'COK'|'COL'|'COM'|'CPV'|'CRI'|'CUB'|'CUW'|'CXR'|'CYM'|'CYP'|'CZE'|'DEU'|'DJI'|'DMA'|'DNK'|'DOM'|'DZA'|'ECU'|'EGY'|'ERI'|'ESH'|'ESP'|'EST'|'ETH'|'FIN'|'FJI'|'FLK'|'FRA'|'FRO'|'FSM'|'GAB'|'GBR'|'GEO'|'GGY'|'GHA'|'GIB'|'GIN'|'GLP'|'GMB'|'GNB'|'GNQ'|'GRC'|'GRD'|'GRL'|'GTM'|'GUF'|'GUM'|'GUY'|'HKG'|'HMD'|'HND'|'HRV'|'HTI'|'HUN'|'IDN'|'IMN'|'IND'|'IOT'|'IRL'|'IRN'|'IRQ'|'ISL'|'ISR'|'ITA'|'JAM'|'JEY'|'JOR'|'JPN'|'KAZ'|'KEN'|'KGZ'|'KHM'|'KIR'|'KNA'|'KOR'|'KWT'|'LAO'|'LBN'|'LBR'|'LBY'|'LCA'|'LIE'|'LKA'|'LSO'|'LTU'|'LUX'|'LVA'|'MAC'|'MAF'|'MAR'|'MCO'|'MDA'|'MDG'|'MDV'|'MEX'|'MHL'|'MKD'|'MLI'|'MLT'|'MMR'|'MNE'|'MNG'|'MNP'|'MOZ'|'MRT'|'MSR'|'MTQ'|'MUS'|'MWI'|'MYS'|'MYT'|'NAM'|'NCL'|'NER'|'NFK'|'NGA'|'NIC'|'NIU'|'NLD'|'NOR'|'NPL'|'NRU'|'NZL'|'OMN'|'PAK'|'PAN'|'PCN'|'PER'|'PHL'|'PLW'|'PNG'|'POL'|'PRI'|'PRK'|'PRT'|'PRY'|'PSE'|'PYF'|'QAT'|'REU'|'ROU'|'RUS'|'RWA'|'SAU'|'SDN'|'SEN'|'SGP'|'SGS'|'SHN'|'SJM'|'SLB'|'SLE'|'SLV'|'SMR'|'SOM'|'SPM'|'SRB'|'SSD'|'STP'|'SUR'|'SVK'|'SVN'|'SWE'|'SWZ'|'SXM'|'SYC'|'SYR'|'TCA'|'TCD'|'TGO'|'THA'|'TJK'|'TKL'|'TKM'|'TLS'|'TON'|'TTO'|'TUN'|'TUR'|'TUV'|'TWN'|'TZA'|'UGA'|'UKR'|'UMI'|'UNK'|'URY'|'USA'|'UZB'|'VAT'|'VCT'|'VEN'|'VGB'|'VIR'|'VNM'|'VUT'|'WLF'|'WSM'|'YEM'|'ZAF'|'ZMB'|'ZWE'
    export type AddressType = 'business'|'residential';
    export type BoxType = 'custom'|'ups_10kg_box'|'ups_25kg_box'|'ups_bpm'|'ups_bpm_flat'|'ups_bpm_parcel'|'ups_express_box'|'ups_first_class'|'ups_flats'|'ups_irregulars'|'ups_large_express_box'|'ups_letter'|'ups_machinables'|'ups_media_mail'|'ups_medium_express_box'|'ups_pak'|'ups_parcel_post'|'ups_parcels'|'ups_priority'|'ups_small_express_box'|'ups_standard_flat'|'ups_tube'
    export type Currency = 'USD';
    export type Status = 'calculating'|'calculated'|'failed';
    export type Slug = 'apc-overnight'|'aramex'|'asendia-de'|'asendia-hk'|'australia-post'|'bluedart'|'bondscouriers'|'bpost-international'|'bpost'|'bring'|'canada-post'|'canpar'|'collectplus'|'courex'|'couriers-please'|'china-post'|'delhivery'|'dhl-discounted'|'dhl-germany'|'dhl-global-mail-asia'|'dhl'|'dotzot'|'dpd-be'|'dpd-nl'|'dpd-uk'|'dpd'|'dpex'|'dtdc'|'endicia'|'fastway-au'|'fedex-smartpost'|'fedex'|'global-express'|'gls-ireland'|'grab'|'hermes'|'hong-kong-post'|'landmark-global'|'malaysia-post'|'mondialrelay'|'new-zealand-post'|'newgistics'|'nightline'|'ninjavan'|'omniparcel'|'ontrac'|'parcelled-in'|'pitney-bowes'|'purolator'|'quantium'|'royal-mail'|'sendle'|'sf-express-ibs'|'sf-express-isp'|'sf-express'|'sfb2c'|'skynetworldwide'|'spain-correos-es'|'spanish-seur'|'spsr'|'star-track'|'taqbin-hk'|'taqbin-jp'|'tipsa'|'tnt'|'usps-discounted'|'usps'|'whistl'|'yodel'|'yunexpress'|'swiss-post'|'kerry-express-th'|'gojek'|'parcll'|'dhl-global-mail'|'chronopost-france'|'toll-priority'|'b2ceurope';
    export enum Endpoint {
        Rates = '/rates',
        ShipperAccounts = '/shipper-accounts'
      };
    export type PaperSize = '4x4'|'4x6'|'4x6.75'|'4x8'|'a4'|'default';
    export type MediaType = 'pdf'|'zpl';

    export enum ChargeType {
      Base = 'base',
      Weight = 'additional_handling_surcharge_-_weight',
      Fuel = 'fuel'
    }
};
export class NcExtension {
    id: string;
    name: string;
    apiVersion: NcVersion;
    extensionVersion: NcVersion;
    costsEndpoint: string;
    queryEndpoint: string;
    randomCardEndpoint: string;
    raritiesEndpoint?: string;
}

export class NcCard {
    name?: string;
    rarity?: string;
    cost?: string[];
    types: string[] = [];
    subtypes: string[] = [];
    thumbnail?: string;
    text?: string;
    printings?: NcPrinting[];
}

export class NcPrinting {
    artist?: string;
    collectorsNumber?: string;
    flavorText?: string;
    image?: string;
    printingIcon?: string;
    printedIn?: string;
    viewOn?: NcExternalInfoProvider[] = [];
    buyAt?: NcExternalInfoProvider[] = [];
}

export class NcExternalInfoProvider {
    constructor(public name: string, public url: string, public icon: string, public price?: string) { }
}

export class NcVersion {
    major?: number;
    minor?: number;
    patch?: number;
}
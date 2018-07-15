export class NcExtension {
    id: string;
    name: string;
    apiVersion: NcVersion;
    extensionVersion: NcVersion;
    queryEndpoint: string;
    randomCardEndpoint: string;
    raritiesEndpoint: string;
    rulesSymbolsEndpoint: string;
}

export class NcCard {
    id: string;
    name?: string;
    rarity?: string;
    faction?: string;
    cost?: string;
    types: string[] = [];
    subtypes?: string[] = [];
    thumbnail?: string;
    text?: string;
    printings?: NcPrinting[];
}

export class NcExternalInfoProvider {
    constructor(public name: string, public url: string, public icon: string, public price?: string = null) { }
}

export class NcPrinting {
    artist?: string;
    flavorText?: string;
    image?: string;
    printingIcon?: string;
    printedIn?: string;
    viewOn?: NcExternalInfoProvider[] = [];
    buyAt?: NcExternalInfoProvider[] = [];
}

export class NcRulesSymbol {
    symbol: string;
    image: string;
}

export class NcVersion {
    major?: number;
    minor?: number;
    patch?: number;
}
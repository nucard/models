export class NcExtension {
    id: string;
    name: string;
    apiVersion: NcVersion;
    extensionVersion: NcVersion;
    endpoints: {
        cards: string;
        externalProviders: string;
        randomCard: string;
        rulesSymbols: string;
        search: string;
    };
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
    name: string;
    url: string;
    icon?: string = null;
    price?: string = null;
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
export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  order: number;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: IStat;
  }>;
  abilities: IPokemonAbility[];
}

export interface IStat {
  base_stat: number;
  effort: number;
}

export interface IAbility {
  name: string;
  url: string;
}

export interface IPokemonAbility {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonType {
  name: string;
  url: string;
}

export interface IPokemonDetailResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  past_abilities: PastAbility[];
  forms: Form[];
  game_indices: Index[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Mfe[];
  species: Species;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  past_stats: PastStat[];
  types: Type[];
  past_types: any[];
  image?: string;
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Ability2;
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface PastAbility {
  generation: Generation;
  abilities: Ability3[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface Ability3 {
  is_hidden: boolean;
  slot: number;
  ability: any;
}

export interface Form {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface Item {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version2;
}

export interface Version2 {
  name: string;
  url: string;
}

export interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
  order: any;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  other: Other;
  versions: Versions;
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Other {
  home: Home;
  showdown: Showdown;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface Home {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface Showdown {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DreamWorld {
  front_female: any;
  front_default: string;
}

export interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-v": GenerationV;
  "generation-ii": GenerationIi;
  "generation-iv": GenerationIv;
  "generation-ix": GenerationIx;
  "generation-vi": GenerationVi;
  "generation-iii": GenerationIii;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface GenerationI {
  yellow: Yellow;
  "red-blue": RedBlue;
}

export interface Yellow {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface RedBlue {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface GenerationV {
  icons: Icons;
  "black-white": BlackWhite;
}

export interface Icons {
  animated: Animated;
  front_default: string;
}

export interface Animated {
  front_default: string;
}

export interface BlackWhite {
  animated: Animated2;
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface Animated2 {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationIi {
  gold: Gold;
  silver: Silver;
  crystal: Crystal;
}

export interface Gold {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

export interface Silver {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

export interface Crystal {
  animated: Animated3;
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
  back_shiny_transparent: string;
  front_shiny_transparent: string;
}

export interface Animated3 {
  front_shiny: string;
  front_default: string;
}

export interface GenerationIv {
  platinum: Platinum;
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
}

export interface Platinum {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface DiamondPearl {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface HeartgoldSoulsilver {
  back_shiny: string;
  back_female: any;
  front_shiny: string;
  back_default: string;
  front_female: any;
  front_default: string;
  back_shiny_female: any;
  front_shiny_female: any;
}

export interface GenerationIx {
  "scarlet-violet": ScarletViolet;
}

export interface ScarletViolet {
  front_female: any;
  front_default: string;
}

export interface GenerationVi {
  "x-y": XY;
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
}

export interface XY {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface OmegarubyAlphasapphire {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface GenerationIii {
  emerald: Emerald;
  "ruby-sapphire": RubySapphire;
  "firered-leafgreen": FireredLeafgreen;
}

export interface Emerald {
  front_shiny: string;
  front_default: string;
}

export interface RubySapphire {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

export interface FireredLeafgreen {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

export interface GenerationVii {
  icons: Icons2;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons2 {
  front_female: any;
  front_default: string;
}

export interface UltraSunUltraMoon {
  front_shiny: string;
  front_female: any;
  front_default: string;
  front_shiny_female: any;
}

export interface GenerationViii {
  icons: Icons3;
  "brilliant-diamond-shining-pearl": BrilliantDiamondShiningPearl;
}

export interface Icons3 {
  front_female: any;
  front_default: string;
}

export interface BrilliantDiamondShiningPearl {
  front_female: any;
  front_default: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface PastStat {
  generation: Generation2;
  stats: Stat3[];
}

export interface Generation2 {
  name: string;
  url: string;
}

export interface Stat3 {
  base_stat: number;
  effort: number;
  stat: Stat4;
}

export interface Stat4 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

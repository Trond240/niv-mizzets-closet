import { selectedCardInfoReducer } from './selectedCardInfo.js';

describe('selectedCardInfoReducer', () => {
  let card1

  beforeEach(() => {
    card1 = {
      "object": "card",
      "id": "456627ec-81a4-40db-91dc-d25a59cd2837",
      "oracle_id": "8b119b69-4794-443e-aa13-747c125b5b1b",
      "multiverse_ids": [
          479055
      ],
      "mtgo_id": 80009,
      "tcgplayer_id": 206238,
      "name": "Treeshaker Chimera",
      "lang": "en",
      "released_at": "2020-01-24",
      "uri": "https://api.scryfall.com/cards/456627ec-81a4-40db-91dc-d25a59cd2837",
      "scryfall_uri": "https://scryfall.com/card/thb/297/treeshaker-chimera?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_uris": {
          "small": "https://img.scryfall.com/cards/small/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "normal": "https://img.scryfall.com/cards/normal/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "large": "https://img.scryfall.com/cards/large/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "png": "https://img.scryfall.com/cards/png/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.png?1580182799",
          "art_crop": "https://img.scryfall.com/cards/art_crop/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "border_crop": "https://img.scryfall.com/cards/border_crop/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799"
      },
      "mana_cost": "{5}{G}{G}",
      "cmc": 7.0,
      "type_line": "Creature — Chimera",
      "oracle_text": "All creatures able to block Treeshaker Chimera do so.\nWhen Treeshaker Chimera dies, draw three cards.",
      "power": "8",
      "toughness": "5",
      "colors": [
          "G"
      ],
      "color_identity": [
          "G"
      ],
      "legalities": {
          "standard": "legal",
          "future": "legal",
          "historic": "legal",
          "pioneer": "legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "not_legal",
          "vintage": "legal",
          "penny": "not_legal",
          "commander": "legal",
          "brawl": "legal",
          "duel": "legal",
          "oldschool": "not_legal"
      },
      "games": [
          "arena",
          "mtgo",
          "paper"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "oversized": false,
      "promo": false,
      "reprint": false,
      "variation": false,
      "set": "thb",
      "set_name": "Theros Beyond Death",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/456627ec-81a4-40db-91dc-d25a59cd2837/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A8b119b69-4794-443e-aa13-747c125b5b1b&unique=prints",
      "collector_number": "297",
      "digital": false,
      "rarity": "rare",
      "flavor_text": "The wisdom of the past is written on the bones of ancients.",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Vincent Proce",
      "artist_ids": [
          "d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"
      ],
      "illustration_id": "fc5f6af6-984c-4a77-9718-3cd78604e8ee",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": false,
      "story_spotlight": false,
      "edhrec_rank": 15641,
      "preview": {
          "source": "Wizards of the Coast",
          "source_uri": "https://magic.wizards.com/en/articles/archive/card-preview/theros-beyond-death-theme-boosters-2019-12-17",
          "previewed_at": "2019-12-17"
      },
      "prices": {
          "usd": "0.36",
          "usd_foil": null,
          "eur": null,
          "tix": "0.44"
      },
      "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479055",
          "tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Treeshaker+Chimera&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Treeshaker+Chimera",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Treeshaker+Chimera"
      },
      "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206238&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Treeshaker+Chimera&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/80009?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
  })

  it ('should have an initial state of an empty array', () => {
    const expected = {};
    const result = selectedCardInfoReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it ('should return the correct state if the action type is LOAD_SELECTED_CARD', () => {
    const mockAction = {
      type: 'LOAD_SELECTED_CARD',
      card: card1
    }
    const mockState = {};
    const result = selectedCardInfoReducer(mockState, mockAction);

    expect(result).toEqual(card1)
  })

  it ('should return the correct state if the action type is CLEAR_SELECTED_CARD', () => {
    const mockAction = {
      type: 'CLEAR_SELECTED_CARD',
      card: {}
    }
    const mockState = card1;
    const result = selectedCardInfoReducer(mockState, mockAction);

    expect(result).toEqual({})
  })
})
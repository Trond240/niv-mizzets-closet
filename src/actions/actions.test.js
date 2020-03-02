import * as actions from '../actions';

describe('actions', () => {
  let card

  beforeEach(() => {
    card = {
      "object": "card",
      "id": "bfc00bf8-236b-4c68-be85-1609be122259",
      "oracle_id": "947a2665-2f4d-4193-8768-118f85334549",
      "multiverse_ids": [
          413698
      ],
      "mtgo_id": 60755,
      "mtgo_foil_id": 60756,
      "tcgplayer_id": 118691,
      "name": "Abundant Growth",
      "lang": "en",
      "released_at": "2016-06-10",
      "uri": "https://api.scryfall.com/cards/bfc00bf8-236b-4c68-be85-1609be122259",
      "scryfall_uri": "https://scryfall.com/card/ema/156/abundant-growth?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_uris": {
          "small": "https://img.scryfall.com/cards/small/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "normal": "https://img.scryfall.com/cards/normal/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "large": "https://img.scryfall.com/cards/large/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "png": "https://img.scryfall.com/cards/png/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.png?1580014714",
          "art_crop": "https://img.scryfall.com/cards/art_crop/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "border_crop": "https://img.scryfall.com/cards/border_crop/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714"
      },
      "mana_cost": "{G}",
      "cmc": 1.0,
      "type_line": "Enchantment — Aura",
      "oracle_text": "Enchant land\nWhen Abundant Growth enters the battlefield, draw a card.\nEnchanted land has \"{T}: Add one mana of any color.\"",
      "colors": [
          "G"
      ],
      "color_identity": [
          "G"
      ],
      "legalities": {
          "standard": "not_legal",
          "future": "not_legal",
          "historic": "not_legal",
          "pioneer": "not_legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "legal",
          "vintage": "legal",
          "penny": "not_legal",
          "commander": "legal",
          "brawl": "not_legal",
          "duel": "legal",
          "oldschool": "not_legal"
      },
      "games": [
          "paper",
          "mtgo"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "oversized": false,
      "promo": false,
      "reprint": true,
      "variation": false,
      "set": "ema",
      "set_name": "Eternal Masters",
      "set_type": "masters",
      "set_uri": "https://api.scryfall.com/sets/1f29f022-3ace-4c96-85e8-1f7b63aadf7e",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aema&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/ema?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/bfc00bf8-236b-4c68-be85-1609be122259/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A947a2665-2f4d-4193-8768-118f85334549&unique=prints",
      "collector_number": "156",
      "digital": false,
      "rarity": "common",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Vincent Proce",
      "artist_ids": [
          "d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"
      ],
      "illustration_id": "1a1434bf-540b-424e-b545-325569e9ef7f",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 3254,
      "prices": {
          "usd": "0.25",
          "usd_foil": "0.49",
          "eur": "0.25",
          "tix": "0.04"
      },
      "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=413698",
          "tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Abundant+Growth&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Abundant+Growth",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Abundant+Growth"
      },
      "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=118691&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Eternal-Masters/Abundant-Growth?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/60755?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
  })

  it ('should have a type of SET_SEARCH_CARDS', () => {
    const cards = [card, card];
    const expectedAction = {
      type: 'SET_SEARCH_CARDS',
      cards
    };
    const result = actions.setSearchCards(cards)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of SET_SELECTED_CARD', () => {
    const id = 123456;
    const expectedAction = {
      type: 'SET_SELECTED_CARD',
      id
    };
    const result = actions.setSelectedCard(id)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of LOAD_SELECTED_CARD', () => {
    const expectedAction = {
      type: 'LOAD_SELECTED_CARD',
      card
    };
    const result = actions.loadSelectedCardInfo(card)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of CLEAR_SELECTED_CARD', () => {
    const expectedAction = {
      type: 'CLEAR_SELECTED_CARD',
      card: {}
    };
    const result = actions.clearSelectedCardInfo()

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of LOADING_CARDS', () => {
    const expectedAction = {
      type: 'LOADING_CARDS',
      loadingStatus: false
    };
    const result = actions.loadingCards(true)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of RESET_SEARCH_CARDS', () => {
    const expectedAction = {
      type: 'RESET_SEARCH_CARDS',
      cards: []
    };
    const result = actions.resetSearchCards()

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of SET_ARTIST_CARDS', () => {
    const cards = [card, card];
    const expectedAction = {
      type: 'SET_ARTIST_CARDS',
      cards
    };
    const result = actions.setArtistCards(cards)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of ADD_TO_FAVORITES', () => {
    const expectedAction = {
      type: 'ADD_TO_FAVORITES',
      card
    };
    const result = actions.addToFavorites(card)

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of REMOVE_FROM_FAVORITES', () => {
    const expectedAction = {
      type: 'REMOVE_FROM_FAVORITES',
      card
    };
    const result = actions.removeFromFavorites(card)

    expect(result).toEqual(expectedAction);
  })
})
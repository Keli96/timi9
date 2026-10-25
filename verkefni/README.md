# Tími 13: Arrays, map, filter & reduce

Skrár fyrir tímann. Glærurnar vísa á þær í þessari röð:

| Glærur                    | Skrá                           | JavaScript                      |
| ------------------------- | ------------------------------ | ------------------------------- |
| 01 · Arrays               | `fylgja-1-arrays.html`         | `js/fylgja-1-arrays.js`         |
| 02 · forEach & map        | `fylgja-2-map.html`            | `js/fylgja-2-map.js`            |
| 03 · filter, find, reduce | `fylgja-3-filter-reduce.html`  | `js/fylgja-3-filter-reduce.js`  |
| Í lokin                   | `timaverkefni.html`            | (inni í HTML skránni)           |

## Uppsetning (5 mín í byrjun tímans)

1. Setjið upp **VS Code** og viðbótina **Live Server** (frá Ritwick Dey) ef hún er ekki komin.
2. Opnið möppuna í VS Code: *File → Open Folder…* og veljið `timi-13-arrays`.
3. Hægri-smellið á `index.html` → **Open with Live Server**. Síðan opnast í vafranum og uppfærist sjálf þegar þið vistið.
4. Opnið console: **F12** (Windows) eða **Cmd + Option + I** (Mac) → flipinn *Console*.

## Möppan

```
timi-13-arrays/
├── index.html                  forsíða með tenglum á allt
├── style.css                   sameiginlegt útlit
├── fylgja-1-arrays.html
├── fylgja-2-map.html
├── fylgja-3-filter-reduce.html
├── timaverkefni.html
├── js/                         HÉR skrifum við kóðann (TODO)
│   ├── fylgja-1-arrays.js
│   ├── fylgja-2-map.js
│   └── fylgja-3-filter-reduce.js
└── lausnir/                    fullkláraðar útgáfur (fyrir kennarann)
    ├── fylgja-*.html
    ├── js/fylgja-*.js
    └── timaverkefni-svor.html
```

## Hvernig skrárnar virka

- HTML er tilbúið. Hver æfing hefur takka sem kallar á function í JS-skránni, t.d. `onclick="aefing1()"`.
- Í `js/` eru allar functions til en tómar, með **TODO** sem segir hvað á að gera. Takkarnir valda því ekki villu áður en kóðinn er skrifaður.
- Sumt er tilbúið viljandi: hjálparföll eins og `synaTolur()`, villudæmið `aefing5Villa()` í skrá 2 og „Spáðu fyrir“ í skrá 3.
- `<script>` er neðst í `<body>`, svo HTML-ið er komið þegar JavaScript keyrir.

## Áður en möppunni er deilt með nemendum

Eyðið `lausnir/` möppunni (og „Lausnir“ hlutanum í `index.html` ef þið viljið) og deilið lausnunum eftir tímann.

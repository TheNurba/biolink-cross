# BioLink Builder — Жумуш абалы (Progress)

> Акыркы жаңыртуу: 2026-06-22

Linktree-окшош bio-link конструктор. Дизайн танда → маалымат толтур → шилтеме бөлүш.
Каттоосуз, баары браузерде.

## ✅ Шилтемелер
- **Жандуу сайт:** https://biolink-cross-production.up.railway.app
- **GitHub:** https://github.com/TheNurba/biolink-cross
- **Railway:** project `biolink-cross` ("thenurba's Projects")

## ✅ Бүткөн иштер
- Next.js 14 (App Router, TypeScript) + Tailwind CSS + react-icons долбоору.
- Бэк/база жок: маалымат `localStorage`'та + бөлүшүү URL'га base64 болуп кодолот.
- **8 дизайн-шаблон:** Midnight, Sunset, Plaid, Vintage, Forest, Clean, Warm, Plum.
- **Барактар:**
  - `/` — лендинг + шаблон галереясы.
  - `/editor` — форма + телефон-frame жандуу preview + шаблон которгуч + "Бөлүшүү".
  - `/view?d=<base64>` — бөлүшүлгөн ачык баракча.
- Локал build таза өттү, Railway'ге деплой → Online (HTTP 200 текшерилди).

## 🗂 Долбоордун түзүлүшү
```
app/
  layout.tsx, globals.css, page.tsx        # лендинг + галерея
  editor/page.tsx, editor/EditorClient.tsx # конструктор (client)
  view/page.tsx                            # ачык баракча (URL декоддойт)
components/
  PhoneFrame.tsx
  templates/
    registry.ts                            # бардык шаблондордун тизмеси
    parts/BaseTemplate.tsx                 # жалпы layout (тема проп алат)
    MidnightDark.tsx, SunsetGradient.tsx, GridPlaid.tsx, VintageCream.tsx,
    ForestGreen.tsx, CleanLight.tsx, WarmTexture.tsx, PlumGradient.tsx
lib/
  types.ts      # ProfileData, TemplateMeta, DEMO_PROFILE
  encode.ts     # encodeProfile/decodeProfile + saveDraft/loadDraft
  socials.tsx   # соцтармак икон картасы
```

## ⚠️ Маанилүү эскертүү (Google Drive)
Бул папка Google Drive ("Мой диск") виртуалдык дискинде → `npm install` жана
`npm run dev/build` **бул жерде иштебейт** (reparse point/көп файл жазуу колдонулбайт).
- Локалда иштетүү: кодду `C:\dev\biolink-cross`'ка көчүрүп, ошол жерде `npm install`.
- Деплой: Railway булутта өзү build кылат, көйгөй жок.
- `git` болсо бул папкада эч кыйынчылыксыз иштейт.

## 🔜 Кийинки кадамдар (тандоо боюнча)
1. **Товар карточкалары** — Amazon/дүкөн стили (сүрөт + аталыш + баа + сатып алуу),
   Marlow Evans / Магазин Тренда мисалдарындай.
2. **Backend + Postgres + каттоо** — көп колдонуучу платформа, ар кимге өз баракчасы.
3. **Аватар сүрөт жүктөө** — азыр URL гана.
4. Кошумча шаблондор / түс жөндөөлөрү / шрифт тандоо.
5. Жеке домен (custom domain) Railway'де.

## 🛠 Деплой эскертмеси
GitHub'ка push кылгандан кийин Railway автоматтык кайра деплой кылбайт (азыр
`railway up` менен кол менен деплой кылынды). Авто-деплой керек болсо Railway
dashboard'тан GitHub репону кошуу керек.

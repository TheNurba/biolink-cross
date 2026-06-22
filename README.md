# BioLink Builder

Linktree-окшош bio-link конструктор. Дизайн танда, маалыматыңды толтур,
шилтемеңди бөлүш — каттоосуз, баары браузерде.

## Технологиялар
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- react-icons

## Өзгөчөлүктөр
- 8 даяр дизайн-шаблон (Midnight, Sunset, Plaid, Vintage, Forest, Clean, Warm, Plum)
- Жируу редактор: форма + жандуу preview (телефон-frame)
- Маалымат `localStorage`'та сакталат
- Бөлүшүү шилтемеси — профиль base64 катары URL'га кодолот (`/view?d=…`)

## Иштетүү
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшн build
```

## Барактар
- `/` — лендинг + дизайн галереясы
- `/editor` — конструктор
- `/view?d=<encoded>` — бөлүшүлгөн ачык баракча

> Эскертүү: бул долбоор Google Drive синхрондолгон папкада `npm install`
> жасай албайт (виртуалдык диск reparse point/көп файл жазууну колдобойт).
> Жергиликтүү дискте же CI/Railway сыяктуу булутта иштетиңиз.

export type ImgKey = "bannerDerma" | "bannerEnt" | "bannerPain" | "bannerSorion" | "bannerGp";
export type ProductDetail = { name: string; tag: string; desc: string; full: string; highlights: string[] };
export type FeatureBox = { badge: string; title: string; text: string; stats: { value: string; label: string }[] };
export type ProductGroup = { title: string; products: ProductDetail[] };
export type ProductCategory = { id: string; tagline: string; title: string; description: string; img: ImgKey; bannerAlt: string; featureBox?: FeatureBox; products: ProductDetail[]; groups?: ProductGroup[] };

// Category order, subcategory grouping and product order follow the product list sheet supplied on 2 Nov 2026.
// Existing cards are unchanged; sheet rows without an existing card are listed in the site review notes instead of being invented.

export const productCategories: ProductCategory[] = [
{
    id: "oral-care", tagline: "Group Pharmaceuticals Ltd, India", title: "Oral Care",
    description: "With over 40 years of expertise in oral care, Group Pharmaceuticals Limited develops, manufactures, markets, and exports a wide range of specialized products tailored to specific dental and oral conditions. Guided by the tagline “Healthy Smiles Matter”, formulations are continually updated with the latest clinical science.", img: "bannerGp", bannerAlt: "Group Pharmaceuticals Limited — Healthy Smiles Matter",
    featureBox: { badge: "Group Pharmaceuticals Limited", title: "Specialized Oral Healthcare Pioneer", text: "Over 40 years of trusted dental innovation guided by \"Healthy Smiles Matter\" — developing targeted, scientifically backed solutions for all oral conditions.", stats: [{"value":"40+ Yrs","label":"Dental & Oral Expertise"},{"value":"14+","label":"Specialized Solutions"},{"value":"Global","label":"Trusted Worldwide"}] },
    products: [
      { name: "About Group Pharmaceuticals", tag: "GP — Company Profile", desc: "Pioneering oral healthcare with over 40 years of expertise in specialized dental formulations tailored to specific oral conditions.", full: "About Group Pharmaceuticals Limited\nWith over 40 years of expertise in oral care, Group Pharmaceuticals Limited develops, manufactures, markets, and exports a wide range of specialized products tailored to specific dental and oral conditions.\n\nGuided by the tagline “Healthy Smiles Matter”, Group Pharma continuously updates its formulations in line with the latest science and research, ensuring trusted solutions for oral health worldwide.\n\nKey Focus Areas:\n• Enamel repair and remineralization\n• Orthodontic dental brace care\n• Paediatric & toddler oral hygiene\n• Dentinal sensitivity occlusion\n• Prosthetic and dry mouth therapeutic care\n• Inclusive hygiene for specially-abled individuals", highlights: ["40+ years oral care expertise","Tagline: \"Healthy Smiles Matter\"","Tailored dental & oral solutions","Continuously updated with latest science","Worldwide manufacturing & exports"] },
    ],
    groups: [
      { title: "Sensitivity", products: [
        { name: "Shy NM", tag: "GP — Sensitive Teeth Care", desc: "Shy NM is part of the Group Pharmaceuticals oral-care range.", full: "Shy NM is part of the Group Pharmaceuticals oral-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Shy XT", tag: "GP — Sensitive Teeth Care", desc: "Shy XT is part of the Group Pharmaceuticals oral-care range.", full: "Shy XT is part of the Group Pharmaceuticals oral-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "SHY OR", tag: "GP — Sensitive Teeth Care", desc: "An oral rinse from Group Pharmaceuticals for sensitive teeth.", full: "SHY OR is an oral rinse for sensitive teeth. The manufacturer lists potassium nitrate and sodium fluoride among its active ingredients.", highlights: [] },
        { name: "SHY Gel", tag: "GP — Sensitive Teeth Care", desc: "A toothpaste gel from Group Pharmaceuticals for sensitive teeth.", full: "SHY Gel is a toothpaste gel for sensitive teeth. The manufacturer lists potassium nitrate and sodium monofluorophosphate among its active ingredients.", highlights: [] },
      ] },
      { title: "Kids Range", products: [
        { name: "Pediflor Kidz - Bubble Gum", tag: "GP — Children Oral Care", desc: "Bubble gum-flavoured toothpaste from the Pediflor Kidz range.", full: "Bubble gum-flavoured toothpaste from the Pediflor Kidz range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Pediflor Kidz - Green Apple", tag: "GP — Children Oral Care", desc: "Green apple-flavoured toothpaste for children, from the Pediflor Kidz range.", full: "Pediflor Kidz Green Apple is a fluoride toothpaste for children's daily oral care. It is the green apple-flavoured variant of the Pediflor Kidz range.", highlights: [] },
        { name: "Pediflor Kidz - Melon", tag: "GP — Children Oral Care", desc: "Melon-flavoured toothpaste for children, from the Pediflor Kidz range.", full: "Pediflor Kidz Melon is a fluoride toothpaste for children. The manufacturer lists xylitol and sodium monofluorophosphate in its formulation.", highlights: [] },
        { name: "Pediflor Kidz - Orange", tag: "GP — Children Oral Care", desc: "Orange-flavoured toothpaste for children, from the Pediflor Kidz range.", full: "Pediflor Kidz Orange is a fluoride toothpaste for children's daily oral care. It is the orange-flavoured variant of the Pediflor Kidz range.", highlights: [] },
        { name: "Pediflor Day & Night Kit", tag: "GP — Children Oral Care", desc: "A children's toothpaste kit with bubble gum and natural orange variants for a day-and-night brushing routine.", full: "Pediflor Day & Night Kit brings together bubble gum and natural orange toothpastes for children. The manufacturer lists two 70 g tubes in the kit.", highlights: [] },
        { name: "Pediflor 1000 ppm", tag: "GP — Children Oral Care", desc: "A children's toothpaste containing 1000 ppm fluoride for daily oral care.", full: "Pediflor 1000 ppm is a fluoride toothpaste for children. The manufacturer describes it as a daily oral-care toothpaste with 1000 ppm fluoride.", highlights: [] },
      ] },
      { title: "Natural Whitening", products: [
        { name: "Glodent", tag: "GP — Whitening Care", desc: "Glodent toothpaste from Group Pharmaceuticals.", full: "Glodent toothpaste from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "Orthodontic Care", products: [
        { name: "Amflor", tag: "GP — Orthodontic Care", desc: "Amflor toothpaste from Group Pharmaceuticals.", full: "Amflor toothpaste from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Amflor Oral Rinse", tag: "GP — Orthodontic Care", desc: "Amflor oral rinse from Group Pharmaceuticals.", full: "Amflor oral rinse from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "Enamel Protection & Restoration", products: [
        { name: "Aclaim", tag: "GP — Enamel Restoration", desc: "Aclaim is part of the Group Pharmaceuticals oral-care range.", full: "Aclaim is part of the Group Pharmaceuticals oral-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Enafix", tag: "GP — Enamel Strengthening", desc: "Enafix toothpaste from Group Pharmaceuticals.", full: "Enafix toothpaste from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "Denture Care", products: [
        { name: "Densive Denture Cleanser Tablets", tag: "GP — Denture Care", desc: "Densive tablets for denture cleaning, from Group Pharmaceuticals.", full: "Densive tablets for denture cleaning, from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Densive Denture Adhesive Powder", tag: "GP — Denture Care", desc: "A denture adhesive in powder form, designed to help dentures stay securely in place.", full: "Densive Denture Adhesive Powder is a powder-format denture adhesive from Group Pharmaceuticals. The manufacturer lists sodium carboxymethyl cellulose among its ingredients and supplies it in a 15 g pack.", highlights: [] },
      ] },
      { title: "Gums & Oral Cavity", products: [
        { name: "Guard OR Mouthwash", tag: "GP — Antiseptic Oral Hygiene", desc: "Guard OR mouthwash from Group Pharmaceuticals.", full: "Guard OR mouthwash from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Guard Oral Rinse Mouthwash", tag: "GP — Antiseptic Oral Hygiene", desc: "A chlorhexidine gluconate oral rinse from Group Pharmaceuticals.", full: "Guard Oral Rinse Mouthwash contains chlorhexidine gluconate 0.2% w/v in a flavoured aqueous base, as listed by the manufacturer. It is an oral rinse for dental and oral hygiene.", highlights: [] },
      ] },
      { title: "Care for Differently Abled", products: [
        { name: "Abledent Range", tag: "GP — Accessible Oral Hygiene", desc: "Abledent is an oral-care range from Group Pharmaceuticals for people with additional care needs.", full: "Abledent is an oral-care range from Group Pharmaceuticals for people with additional care needs. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "More from Group Pharmaceuticals", products: [
        { name: "Elsenz", tag: "GP — Cavity Prevention", desc: "Elsenz toothpaste from Group Pharmaceuticals.", full: "Elsenz toothpaste from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Ethiaspire", tag: "GP — Toddler Oral Care", desc: "Ethiaspire is part of the Group Pharmaceuticals oral-care range.", full: "Ethiaspire is part of the Group Pharmaceuticals oral-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Ormist", tag: "GP — Dry Mouth Relief", desc: "Ormist oral spray from Group Pharmaceuticals.", full: "Ormist oral spray from Group Pharmaceuticals. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
    ],
  },
{
    id: "dermatology", tagline: "Sorion — Plant-Based Biotechnology", title: "Dermatology",
    description: "Founded in 2016, Atrimed Biotech is a global leader in plant-based biotechnology. With over 500,000 botanical ingredients and AI-guided molecular pathway research, Sorion formulations are Dermatest-certified in Germany and trusted in over 30 countries for chronic inflammatory skin conditions.", img: "bannerSorion", bannerAlt: "Sorion & Atrimed Biotech — Plant-Based Biotechnology",
    featureBox: { badge: "Atrimed Biotech & Sorion", title: "World Leader in Plant-Based Biotechnology", text: "Leveraging AI research and the world’s largest botanical database of 500,000+ ingredients to formulate Dermatest-certified antipsoriatic and anti-inflammatory relief.", stats: [{"value":"500K+","label":"Botanical Database"},{"value":"30+","label":"Countries Worldwide"},{"value":"Dermatest®","label":"Certified in Germany"}] },
    products: [
      { name: "About Sorion & Atrimed Biotech", tag: "Sorion — Global Phytobiotechnology", desc: "Leader in plant-based biotechnology with a 500,000+ botanical database, AI research, and Dermatest-certified formulations trusted in 30+ countries.", full: "🌿 About Atrimed Biotech\nFounded in 2016, Atrimed Biotech is a leader in plant-based biotechnology. With the world’s largest database of over 500,000 botanical ingredients, the company leverages AI and advanced research in cell signalling pathways, protein–ligand binding, and molecular activity to develop innovative healthcare solutions.\nAtrimed’s portfolio includes Plant Science and the globally recognized Sorion brand.\n\n🌍 Sorion – Global Presence\nSorion is trusted in more than 30 countries worldwide, with its strongest presence in Germany. The brand is also well established in Australia, France, Italy, Spain, Ireland, Belgium, USA, Canada, Vietnam, Malaysia, South Korea, and Russia.\n\n🧪 Clinically Tested & Proven\nSorion formulations are Dermatest-certified in Germany and powered by phytoconstituents from five herbal extracts. These extracts provide:\n• Antipsoriatic action\n• Anti-inflammatory relief\n• Soothing & moisturizing effects\n• Healing properties\n\nThe Sorion range is indicated for inflammatory skin conditions including Psoriasis, Seborrheic Dermatitis, and Atopic Dermatitis.", highlights: ["500,000+ botanical database & AI research","Dermatest-certified in Germany","Trusted in 30+ countries worldwide","Antipsoriatic, anti-inflammatory & healing","Proven for Psoriasis & Dermatitis"] },
    ],
    groups: [
      { title: "Psoriasis, Dermatitis, Seborrheia, Eczema", products: [
        { name: "Sorion Shampoo", tag: "Sorion — Hair & Scalp Care", desc: "Shampoo from the Sorion hair and scalp-care range.", full: "Shampoo from the Sorion hair and scalp-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Sorion Head Fluid", tag: "Sorion — Scalp Care", desc: "Head fluid from the Sorion scalp-care range.", full: "Head fluid from the Sorion scalp-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Sorion Cream", tag: "Sorion — Intensive Care", desc: "Cream from the Sorion skin-care range.", full: "Cream from the Sorion skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Sorion Sensitive Cream", tag: "Sorion — Sensitive Care", desc: "Sensitive cream from the Sorion skin-care range.", full: "Sensitive cream from the Sorion skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Sorion Moisturiser", tag: "Sorion — Daily Hydration", desc: "Moisturiser from the Sorion skin-care range.", full: "Moisturiser from the Sorion skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Sorion Soap", tag: "Sorion — Cleansing Care", desc: "Soap from the Sorion skin-care range.", full: "Soap from the Sorion skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
    ],
  },
{
    id: "derma-cosmetics", tagline: "Complete Care for Every Skin", title: "Derma-cosmetics",
    description: "Discover specialised products designed to support healthy skin and address a range of dermatological needs. Our curated dermatology range is trusted by healthcare professionals across international markets.", img: "bannerDerma", bannerAlt: "Derma-cosmetics — Celex & Dermatone Range",
    products: [],
    groups: [
      { title: "SPF Range", products: [
        { name: "Celex Natural Touch Silky Feel SPF 50+", tag: "Celex — Sun Protection", desc: "Celex Natural Touch Silky Feel SPF 50+ is part of the Celex sun protection range.", full: "Celex Natural Touch Silky Feel SPF 50+ is part of the Celex sun protection range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Spot Reduction Aqua Touch SPF 50+", tag: "Celex — Sun Protection", desc: "Celex Spot Reduction Aqua Touch SPF 50+ is part of the Celex sun protection range.", full: "Celex Spot Reduction Aqua Touch SPF 50+ is part of the Celex sun protection range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Spot Reduction Silky Feel SPF 50+", tag: "Celex — Sun Protection", desc: "Part of the Celex sun protection range. Detailed product information will be added soon.", full: "Part of the Celex sun protection range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "Moisturizing range", products: [
        { name: "Celex Day & Night Cream with SPF", tag: "Celex — Moisturiser", desc: "Day and night cream with SPF from the Celex moisturising range.", full: "Day and night cream with SPF from the Celex moisturising range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Dermatone Daily Moisturising Face Cream", tag: "Dermatone — Moisturiser", desc: "Daily moisturising face cream from the Dermatone range.", full: "Daily moisturising face cream from the Dermatone range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Moisturising Cream with Ceramide & Urea", tag: "Celex — Moisturiser", desc: "Part of the Celex moisturiser range. Detailed product information will be added soon.", full: "Part of the Celex moisturiser range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "For Skin Pigmentation & Melasma", products: [
        { name: "Dermatone Lightening Gel", tag: "Dermatone — Skin Brightening", desc: "Lightening gel from the Dermatone skin-care range.", full: "Lightening gel from the Dermatone skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Dermatone Brightening Bar", tag: "Dermatone — Skin Brightening", desc: "Brightening bar from the Dermatone skin-care range.", full: "Brightening bar from the Dermatone skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "Advanced Scar Reduction", products: [
        { name: "Dermascar Gel", tag: "Scar Reduction", desc: "Dermascar Gel is listed in the scar care range. Detailed product information will be added soon.", full: "Dermascar Gel is listed in the scar care range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "For Corns & Warts", products: [
        { name: "Dermacorn Solution", tag: "Dermacorn — Warts & Corns", desc: "Dermacorn Solution for warts and corns, 10 ml, for external use only.", full: "Dermacorn Solution for warts and corns, 10 ml, for external use only.", highlights: [] },
      ] },
      { title: "Soap / Bars", products: [
        { name: "Celex Bar for Acne", tag: "Celex — Soap / Bars", desc: "Part of the Celex soap and bar range. Detailed product information will be added soon.", full: "Part of the Celex soap and bar range. Detailed product information will be added soon.", highlights: [] },
        { name: "Celex Moisturising Bar", tag: "Celex — Soap / Bars", desc: "Part of the Celex soap and bar range. Detailed product information will be added soon.", full: "Part of the Celex soap and bar range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "More from the Range", products: [
        { name: "Celex Vitamin C Face Serum", tag: "Celex — Face Serum", desc: "Vitamin C face serum from the Celex skin-care range.", full: "Vitamin C face serum from the Celex skin-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Lumiskin Sunscreen", tag: "Celex — Sun Protection", desc: "Lumiskin sunscreen from the Celex sun protection range.", full: "Lumiskin sunscreen from the Celex sun protection range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex UV-Ease Sunscreen", tag: "Celex — Sun Protection", desc: "UV-Ease sunscreen from the Celex sun protection range.", full: "UV-Ease sunscreen from the Celex sun protection range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Depigmentation Sunscreen", tag: "Celex — Sun Protection", desc: "Depigmentation sunscreen from the Celex sun protection range.", full: "Depigmentation sunscreen from the Celex sun protection range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Celex Under Eye Roll On Serum", tag: "Celex — Under Eye Care", desc: "Part of the Celex derma-cosmetics range. Detailed product information will be added soon.", full: "Part of the Celex derma-cosmetics range. Detailed product information will be added soon.", highlights: [] },
      ] },
    ],
  },
{
    id: "pharma-otc", tagline: "Pain, Cold & ENT Care", title: "Pharma OTC",
    description: "Trusted over-the-counter essentials across pain management, cold and cough relief, and ENT care - combining the Rubit pain range with everyday respiratory, throat, and ear care solutions.", img: "bannerPain", bannerAlt: "Pharma OTC — Rubit, Euclear, Ear Ease & Olive Ease",
    products: [],
    groups: [
      { title: "Pain Management", products: [
        { name: "Rubit Pain Ointment", tag: "Rubit — Topical Relief", desc: "Rubit Pain Ointment is part of the Rubit topical-care range.", full: "Rubit Pain Ointment is part of the Rubit topical-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Rubit Cool Gel", tag: "Rubit — Cooling Relief", desc: "Rubit Cool Gel is part of the Rubit topical-care range.", full: "Rubit Cool Gel is part of the Rubit topical-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Rubit Cramps", tag: "Rubit — Cramp Relief", desc: "Rubit Cramps is part of the Rubit topical-care range.", full: "Rubit Cramps is part of the Rubit topical-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Rubit Arthro", tag: "Rubit — Joint Care", desc: "Rubit Arthro is part of the Rubit topical-care range.", full: "Rubit Arthro is part of the Rubit topical-care range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Rubit Liniment", tag: "Rubit — Topical Relief", desc: "Part of the Rubit topical pain relief range. Detailed product information will be added soon.", full: "Part of the Rubit topical pain relief range. Detailed product information will be added soon.", highlights: [] },
        { name: "Rubit Pregnancy", tag: "Rubit — Topical Relief", desc: "Part of the Rubit topical relief range. Detailed product information will be added soon.", full: "Part of the Rubit topical relief range. Detailed product information will be added soon.", highlights: [] },
        { name: "Rubit Kids", tag: "Rubit — Topical Relief", desc: "Part of the Rubit topical relief range. Detailed product information will be added soon.", full: "Part of the Rubit topical relief range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "Oral care", products: [
        { name: "Pain Off Dental Gel", tag: "Pain Off — Dental Relief", desc: "Pain Off dental gel for rapid toothache relief, 10 g pack.", full: "Pain Off dental gel for rapid toothache relief, 10 g pack.", highlights: [] },
      ] },
      { title: "Cold & Cough Relief", products: [
        { name: "Euclear Throat Lozenges", tag: "Euclear — Throat Care", desc: "Throat lozenges from the Euclear range.", full: "Throat lozenges from the Euclear range. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
        { name: "Euclear Inhalation Vapocaps", tag: "Euclear — Respiratory", desc: "Inhalant capsules from the Euclear range, supplied in a pack of 10.", full: "Euclear Inhalation Vapocaps are inhalant capsules. The exact Euclear product listing identifies a pack of 10 capsules intended for inhalation use.", highlights: [] },
        { name: "Euclear Baby RollOn", tag: "Euclear — Baby Care", desc: "Roll-on product from the Euclear range. Check the product label and consult a healthcare professional about age suitability before use.", full: "Roll-on product from the Euclear range. Check the product label and consult a healthcare professional about age suitability before use. Refer to the product packaging for ingredients, directions and warnings.", highlights: [] },
      ] },
      { title: "ENT Range", products: [
        { name: "Ear Ease Sodium Bicarbonate Eardrops", tag: "Ear Ease — Ear Care", desc: "Ear drops for softening excess ear wax, supplied in a 10 ml pack.", full: "Ear Ease is an ear-drop product for ear-wax softening and ear canal cleansing. The exact Excel product listing identifies a 10 ml pack.", highlights: [] },
        { name: "Olive-Ease Olive Oil eardrops", tag: "Olive-Ease — Ear Care", desc: "Olive oil ear drops for softening hardened ear wax.", full: "Olive-Ease is an olive oil ear-drop product supplied in a 10 ml pack. The exact Excel product listing describes it as an ear-wax softening product.", highlights: [] },
      ] },
      { title: "Normal saline nasal drops & spray", products: [
        { name: "Normal Saline Nasal Drops", tag: "Delsal — ENT Care", desc: "Part of the ENT range. Detailed product information will be added soon.", full: "Part of the ENT range. Detailed product information will be added soon.", highlights: [] },
        { name: "Delsal Normal Saline Nasal Spray", tag: "Delsal — ENT Care", desc: "Part of the Delsal nasal care range. Detailed product information will be added soon.", full: "Part of the Delsal nasal care range. Detailed product information will be added soon.", highlights: [] },
      ] },
      { title: "Inhalation solution", products: [
        { name: "Delsal Inhalation Solution", tag: "Delsal — ENT Care", desc: "Part of the Delsal respiratory care range. Detailed product information will be added soon.", full: "Part of the Delsal respiratory care range. Detailed product information will be added soon.", highlights: [] },
      ] },
    ],
  },
];

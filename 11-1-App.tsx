import type { ReactNode } from 'react';
import './style.css';
import worldMap from './worldmap.svg';
import pageWash from './page-wash.png';
import logo from './logo.png';
import shailendra from './shailendra.png';
import jills from './jills-daniel.png';
import bannerDerma from './Banner_1.jpeg';
import bannerEnt from './Banner_2.jpeg';
import bannerPain from './Banner_3.jpeg';
import slideEnt from './slide-ent.jpg';
import slideCelex from './slide-celex.jpg';
import slideSorion from './slide-sorion.jpg';
import slideRubit from './slide-rubit.jpg';
import slideGroupPharma from './slide-grouppharma.jpg';
import gpFacePlate from './gp-face-plate.png';
import entFamilyPlate from './ent-family-plate.png';
import entWomanPlate from './ent-woman-plate.png';
import bannerSorion from './Atrimed.jpeg';
import bannerGp from './GroupPharma.jpeg';
import flagOman from './Flag_of_Oman.svg.webp';
import flagQatar from './Flag_of_Qatar.svg.webp';
import flagUae from './Flag_of_the_United_Arab_Emirates.svg';
import flagBahrain from './Flag_of_Bahrain.svg.webp';
import logoDelta from './logo-delta.png';
import logoFamily from './logo-family.png';
import logoTruth from './logo-truth.png';
import logoAksyr from './logo-aksyr.png';
import logoRiomed from './logo-riomed.png';
import phDayNight from './prod-celex-day-night.jpg';
import phNaturalTouch from './prod-celex-natural-touch.jpg';
import phSpotReduction from './prod-celex-spot-reduction.jpg';
import phDermatoneGel from './prod-dermatone-gel.jpg';
import phDermatoneBar from './prod-dermatone-bar.jpg';
import phDermatoneFaceCream from './prod-dermatone-face-cream.jpg';
import phDermacorn from './prod-dermacorn.jpg';
import phEuclearRollon from './prod-euclear-rollon.jpg';
import phEuclearLozenges from './prod-euclear-lozenges.jpg';
import phPainoff from './prod-painoff.jpg';
import phRubitBalm from './prod-rubit-balm.jpg';
import phRubitCool from './prod-rubit-cool.jpg';
import phRubitArthro from './prod-rubit-arthro.jpg';
import phSorionCream from './prod-sorion-cream.jpg';
import phSorionHeadFluid from './prod-sorion-head-fluid.jpg';
import phSorionShampoo from './prod-sorion-shampoo.jpg';
import phSorionSoap from './prod-sorion-soap.jpg';
import phSorionMoisturiser from './prod-sorion-moisturiser.jpg';
import phAclaim from './prod-aclaim.jpg';
import phAmflorToothpaste from './prod-amflor-toothpaste.jpg';
import phAmflorMouthwash from './prod-amflor-mouthwash.jpg';
import phElsenz from './prod-elsenz.jpg';
import phEnafix from './prod-enafix.jpg';
import phGlodent from './prod-glodent.jpg';
import phPediflor from './prod-pediflor.jpg';
import phShyNm from './prod-shy-nm.jpg';
import phShyXt from './prod-shy-xt.jpg';
import phGuardOr from './prod-guard-or.jpg';
import phDensive from './prod-densive.jpg';

const EMAIL = 'info@excelglobalhealth.com';

const pillars = [
    { name: 'Global Reach', detail: 'Connecting businesses with opportunities across international healthcare markets.' },
    { name: 'Strategic Partnerships', detail: 'Building strong relationships between manufacturers, distributors, and market partners.' },
    { name: 'Market Growth', detail: 'Supporting companies as they launch, expand, and grow internationally.' },
];

const pillarIcons = [
    <svg key="i1" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="13" cy="13" r="9.5" /><ellipse cx="13" cy="13" rx="4.2" ry="9.5" /><path d="M3.5 10.5h19M3.5 15.5h19" /></svg>,
    <svg key="i2" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="9.5" cy="13" r="6" /><circle cx="16.5" cy="13" r="6" /></svg>,
    <svg key="i3" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20.5h18" /><path d="M6.5 16.5l4.5-5 3.5 3 5.5-6.5" /><path d="M15.5 8H20v4.5" /></svg>,
];

import { productCategories } from './products';
import type { ProductCategory, ProductDetail } from './products';

const IMG = { bannerDerma, bannerEnt, bannerPain, bannerSorion, bannerGp };

type DlgItem = { id: string; img: ImgKey; photo?: string } & ProductDetail;
import type { ImgKey } from './products';

const PHOTO_BY_NAME: Record<string, string> = {
    'Celex Day & Night Cream': phDayNight,
    'Celex Natural Touch Sunscreen': phNaturalTouch,
    'Celex Spot Reduction Sunscreen': phSpotReduction,
    'Dermatone Brightening Gel': phDermatoneGel,
    'Dermatone Brightening Bar': phDermatoneBar,
    'Dermatone Daily Moisturising Face Cream': phDermatoneFaceCream,
    'Dermacorn Liquid': phDermacorn,
    'Euclear Baby RollOn': phEuclearRollon,
    'Euclear Lozenges': phEuclearLozenges,
    'Painoff Dental Gel': phPainoff,
    'Rubit Pain Balm': phRubitBalm,
    'Rubit Cool Gel': phRubitCool,
    'Rubit Arthro': phRubitArthro,
    'Sorion Cream': phSorionCream,
    'Sorion Head Fluid': phSorionHeadFluid,
    'Sorion Shampoo': phSorionShampoo,
    'Sorion Soap': phSorionSoap,
    'Sorion Moisturiser': phSorionMoisturiser,
    'Aclaim': phAclaim,
    'Amflor Toothpaste': phAmflorToothpaste,
    'Amflor Mouthwash': phAmflorMouthwash,
    'Elsenz': phElsenz,
    'Enafix': phEnafix,
    'Glodent': phGlodent,
    'Pediflor': phPediflor,
    'Shy NM': phShyNm,
    'Shy XT': phShyXt,
    'Guard OR': phGuardOr,
    'Densive': phDensive,
};

const dlgItems: DlgItem[] = [];
productCategories.forEach((c) => {
    c.products.forEach((p) => dlgItems.push({ id: `eghdlg-${dlgItems.length}`, img: c.img, photo: PHOTO_BY_NAME[p.name], ...p }));
    (c.groups ?? []).forEach((g) => g.products.forEach((p) => dlgItems.push({ id: `eghdlg-${dlgItems.length}`, img: c.img, photo: PHOTO_BY_NAME[p.name], ...p })));
});
const dlgIdByName = new Map(dlgItems.map((d) => [d.name, d.id]));

const openDlg = (id: string) => {
    const dlg = document.getElementById(id) as HTMLDialogElement | null;
    if (dlg && !dlg.open) dlg.showModal();
};
const closeDlg = (id: string) => {
    const dlg = document.getElementById(id) as HTMLDialogElement | null;
    if (dlg?.open) dlg.close();
};

const catCount = (c: ProductCategory) => c.products.length + (c.groups ?? []).reduce((n, g) => n + g.products.length, 0);

const partnerNetwork: { country: string; slug: string; flag: string; distributors: { name: string; logo: string; tag?: string; meta?: string; email?: string; phone?: string; phoneDisplay?: string }[] }[] = [
    { country: 'Oman', slug: 'oman', flag: flagOman, distributors: [
        { name: 'Delta Pharmacy, Division of Bin Zahran United LLC', logo: logoDelta,
          tag: 'Pharmaceuticals, Cosmetics and Health Care Products - Distribution & Marketing. Retail Pharmacy Operation.',
          meta: 'Muscat' },
    ]},
    { country: 'Qatar', slug: 'qatar', flag: flagQatar, distributors: [
        { name: 'Family Medical Establishment WLL', logo: logoFamily,
          tag: 'Pharmaceutical Manufacturing',
          meta: 'Doha, Qatar' },
        { name: 'Truth Care Pharmacy', logo: logoTruth,
          tag: 'Truth is our success',
          meta: 'Retail Pharmacies' },
        { name: 'Aksyr Al Hyah Trading', logo: logoAksyr,
          tag: 'Elevate Your Well-being, Redefine Opulence: Your Exclusive Heaven for Health and Beauty.',
          meta: 'Retail · Doha' },
    ]},
    { country: 'United Arab Emirates', slug: 'united-arab-emirates', flag: flagUae, distributors: [
        { name: 'Riomed Medical Supplies', logo: logoRiomed,
          email: 'sales@riomed.ae', phone: '+97143201221', phoneDisplay: '+971 - 4 - 320 1221' },
    ]},
    { country: 'Bahrain', slug: 'bahrain', flag: flagBahrain, distributors: [] },
];

const leaders = [
    { img: shailendra, name: 'V M Shailendra', bio: 'Diversified experience ranging from Sales & Marketing as the Regional Head for Novo Nordisk for 14 years and as a banker with ICICI bank, before establishing own pharma distribution business.' },
    { img: jills, name: 'Jills Daniel', bio: 'Pharmacist by profession and an extensive international experience, strong interest in innovative medical technologies with 20 years in Diabetes, Point of Care, Critical Care, Dental, Cardiology, Infection Control, Diagnostics Physiotherapy & Pharma.' },
];

import { Routes, Route, Link, NavLink } from 'react-router-dom';

const NAV = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/partners', label: 'Partners' },
    { to: '/contact', label: 'Contact' },
];

function Chrome({ children }: { children: ReactNode }) {
    return <div className="egh-page" style={{ backgroundImage: `url(${pageWash})` }}>
        <header className="egh-topbar">
            <div className="egh-header-row">
                <Link to="/" aria-label="Excel Global Health home"><img className="egh-logo" src={logo} alt="Excel Global Health" /></Link>
                <nav className="egh-nav-desktop" aria-label="Site">
                    {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end} className="egh-nav-link">{n.label}</NavLink>)}
                </nav>
                <a className="egh-btn egh-btn-outline egh-header-cta" href={`mailto:${EMAIL}?subject=Business%20enquiry`}>Get in touch</a>
                <details className="egh-menu">
                    <summary className="egh-menu-btn" aria-label="Toggle menu">
                        <svg className="egh-icon-burger" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
                        <svg className="egh-icon-close" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M5 5l10 10M15 5L5 15" /></svg>
                    </summary>
                    <nav className="egh-nav-mobile" aria-label="Site">
                        {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.end} className="egh-nav-mobile-link" onClick={(e) => { const d = (e.currentTarget as HTMLElement).closest('details'); if (d) d.removeAttribute('open'); }}>{n.label}</NavLink>)}
                        <a className="egh-btn egh-btn-primary egh-nav-mobile-cta" href={`mailto:${EMAIL}?subject=Business%20enquiry`} onClick={(e) => { const d = (e.currentTarget as HTMLElement).closest('details'); if (d) d.removeAttribute('open'); }}>Get in touch</a>
                    </nav>
                </details>
            </div>
        </header>
        {children}
        <footer className="egh-footer">
            <div className="egh-footer-card">
                <div className="egh-footer-left">
                    <Link to="/" aria-label="Excel Global Health home"><img className="egh-footer-logo" src={logo} alt="Excel Global Health" /></Link>
                    <Link className="egh-footer-cta" to="/contact">Get in Touch</Link>
                </div>
                <div className="egh-footer-right">
                    <div className="egh-footer-group">
                        <a className="egh-footer-line" href="tel:+919605885579">+91 9605 88 55 79</a>
                        <a className="egh-footer-line" href="tel:+919902877330">+91 9902877330</a>
                        <a className="egh-footer-line" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                    <div className="egh-footer-group">
                        <p className="egh-footer-line">Excel Global Health LLC-FZ</p>
                        <p className="egh-footer-line">Dubai, U.A.E.</p>
                        <p className="egh-footer-line">Excel Global Health, Bengaluru</p>
                        <p className="egh-footer-line">India.</p>
                    </div>
                    <p className="egh-footer-copy">&copy; 2026 by Excel Global Health</p>
                </div>
            </div>
        </footer>
    </div>;
}

function PageHead({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
    return <header className="egh-pagehead">
        <p className="egh-eyebrow">{eyebrow}</p>
        <h1 className="egh-h2 egh-pagehead-title">{title}</h1>
        {lede && <p className="egh-lede2">{lede}</p>}
    </header>;
}

function HomePage() {
    return <>
        <div className="egh-hero-wrap"><section className="egh-hero">
            <div className="egh-hero-slides" aria-hidden="true">
                <div className="egh-hero-slide egh-hero-slide-map">
                    <div className="egh-hero-mapwrap">
                        <img className="egh-hero-map" src={worldMap} alt="" />
                        <svg className="egh-hero-arcs" viewBox="0 0 900 450" preserveAspectRatio="xMidYMid meet">
                            <circle className="egh-hero-origin" cx="644" cy="193" r="5" />
                            <circle className="egh-hero-origin-ring" cx="644" cy="193" r="5" />
                            <path className="egh-arc egh-arc-1" d="M644,193 Q610,148 588,162" />
                            <path className="egh-arc egh-arc-2" d="M644,193 Q560,58 475,100" />
                            <path className="egh-arc egh-arc-3" d="M644,193 Q592,236 542,228" />
                            <path className="egh-arc egh-arc-4" d="M644,193 Q680,226 710,222" />
                            <path className="egh-arc egh-arc-5" d="M644,193 Q540,60 452,112" />
                            <path className="egh-arc egh-arc-6" d="M644,193 Q672,140 700,122" />
                            <path className="egh-arc egh-arc-7" d="M644,193 Q722,245 745,272" />
                            <path className="egh-arc egh-arc-8" d="M644,193 Q560,280 498,286" />
                            <path className="egh-arc egh-arc-9" d="M644,193 Q460,90 300,216" />
                            <circle className="egh-arc-dot egh-arc-dot-1" cx="588" cy="162" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-2" cx="475" cy="100" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-3" cx="542" cy="228" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-4" cx="710" cy="222" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-5" cx="452" cy="112" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-6" cx="700" cy="122" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-7" cx="745" cy="272" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-8" cx="498" cy="286" r="4.5" />
                            <circle className="egh-arc-dot egh-arc-dot-9" cx="300" cy="216" r="4.5" />
                        </svg>
                    </div>
                </div>
                <div className="egh-hero-slide egh-hero-slide-img" style={{ backgroundImage: `url(${slideEnt})` }}>
                    <img className="egh-plate egh-plate-ent-family" src={entFamilyPlate} alt="" />
                    <img className="egh-plate egh-plate-ent-woman" src={entWomanPlate} alt="" />
                </div>
                <div className="egh-hero-slide egh-hero-slide-img" style={{ backgroundImage: `url(${slideCelex})` }} />
                <div className="egh-hero-slide egh-hero-slide-img" style={{ backgroundImage: `url(${slideSorion})` }} />
                <div className="egh-hero-slide egh-hero-slide-img" style={{ backgroundImage: `url(${slideRubit})` }} />
                <div className="egh-hero-slide egh-hero-slide-img" style={{ backgroundImage: `url(${slideGroupPharma})` }}>
                    <img className="egh-plate egh-plate-gp-face" src={gpFacePlate} alt="" />
                </div>
            </div>
            <div className="egh-hero-veil" aria-hidden="true" />
            <div className="egh-hero-inner">
                <p className="egh-eyebrow egh-eyebrow-left">Connecting healthcare beyond borders</p>
                <h1 className="egh-h1">Your gateway to global healthcare markets</h1>
                <p className="egh-lede">Helping healthcare manufacturers and distributors connect, launch, and grow across international markets.</p>
                <div className="egh-cta-row">
                    <Link className="egh-btn egh-btn-primary" to="/products">Explore our products</Link>
                    <Link className="egh-btn egh-btn-ghost" to="/partners">Partner with us</Link>
                </div>
            </div>
        </section></div>

        <section className="egh-section egh-intro">
            <p className="egh-intro-text">Excel Global Health helps healthcare manufacturers and distributors build meaningful connections across international markets. We bring together products, partners, and opportunities to support sustainable global growth.</p>
            <div className="egh-factrow">
                {pillars.map((p, i) => (
                    <div className={`egh-fact egh-fact-${i + 1}`} key={p.name}>
                        <span className="egh-fact-icon" aria-hidden="true">{pillarIcons[i]}</span>
                        <span className="egh-fact-num" aria-hidden="true">0{i + 1}</span>
                        <p className="egh-fact-value">{p.name}</p>
                        <p className="egh-pillar-detail">{p.detail}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="egh-section">
            <p className="egh-eyebrow">The range</p>
            <h2 className="egh-h2">Healthcare solutions for diverse markets</h2>
            <p className="egh-lede2">A curated portfolio of certified medical and healthcare products across oral care, dermatology, derma-cosmetics and pharma OTC categories.</p>
            <div className="egh-rangegrid">
                {productCategories.map((c, i) => (
                    <Link className="egh-rangecard" to="/products" key={c.title}>
                        <span className="egh-rangecard-num" aria-hidden="true">0{i + 1}</span>
                        <span className="egh-rangecard-body">
                            <span className="egh-eyebrow egh-rangecard-tag">{c.tagline}</span>
                            <span className="egh-rangecard-title">{c.title}</span>
                        </span>
                        <span className="egh-rangecard-meta">
                            <span className="egh-rangecard-count">{catCount(c)} products</span>
                            <span className="egh-rangecard-arrow" aria-hidden="true">&rarr;</span>
                        </span>
                    </Link>
                ))}
            </div>
            <div className="egh-cta-row egh-cta-center">
                <Link className="egh-btn egh-btn-primary" to="/products">View the full catalogue</Link>
            </div>
        </section>

        <section className="egh-band">
            <p className="egh-eyebrow">International partners</p>
            <h2 className="egh-h2">Building connections. Expanding possibilities.</h2>
            <p className="egh-band-text">We work with trusted international distributors to connect quality healthcare products with new markets and opportunities around the world.</p>
            <div className="egh-countries">
                {partnerNetwork.map((c) => (
                    <Link className="egh-country" to={`/partners#${c.slug}`} key={c.country} title={`View distributors in ${c.country}`} onClick={() => { const s = c.slug; const go = (smooth: boolean) => { const el = document.getElementById(s); if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' }); }; setTimeout(() => go(false), 150); setTimeout(() => go(false), 900); }}>
                        <img className="egh-country-flag" src={c.flag} alt={`Flag of ${c.country}`} />
                        <span className="egh-country-name">{c.country}</span>
                    </Link>
                ))}
            </div>
            <div className="egh-band-card">
                <p className="egh-band-card-title">Looking to distribute our products?</p>
                <p className="egh-band-card-text">Let&rsquo;s explore opportunities in your market.</p>
                <Link className="egh-btn egh-btn-primary" to="/partners">Partner with us</Link>
            </div>
        </section>
    </>;
}

function AboutPage() {
    return <>
        <PageHead eyebrow="Our story" title="Finding inspiration in every turn" />
        <section className="egh-section egh-section-tight">
            <p className="egh-body">Excel Global Health was founded with a vision to bring innovative healthcare technologies and quality products to a wider global market. Drawing inspiration from India&rsquo;s long-standing contribution to medicine and healthcare, we strive to build meaningful connections between manufacturers, distributors, healthcare professionals, and international markets.</p>
            <p className="egh-body">Our journey is driven by a commitment to making trusted and innovative healthcare solutions more accessible, helping improve quality of life while creating stronger partnerships across borders.</p>
            <blockquote className="egh-quote">&ldquo;The secret of health for both mind and body is not to mourn for the past, or anticipate troubles, but to live in the present moment wisely and earnestly.&rdquo;<span className="egh-quote-attr">&mdash; Buddha</span></blockquote>
            <blockquote className="egh-quote">&ldquo;Technology will not replace great doctors, but technology in the hands of great doctors can be transformational.&rdquo;</blockquote>
        </section>

        <section className="egh-section">
            <p className="egh-eyebrow">Excel management</p>
            <h2 className="egh-h2">The people behind Excel</h2>
            <div className="egh-leaders">
                {leaders.map((l) => (
                    <div className="egh-leader" key={l.name}>
                        <img className="egh-leader-img" src={l.img} alt={l.name} />
                        <p className="egh-leader-name">{l.name}</p>
                        <p className="egh-leader-bio">{l.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    </>;
}

function ProductCard({ p }: { p: ProductDetail }) {
    const id = dlgIdByName.get(p.name) ?? '';
    return (
        <button type="button" className="egh-prod egh-prod-btn" onClick={() => openDlg(id)}>
            <p className="egh-prod-brand">{p.tag}</p>
            <p className="egh-prod-name">{p.name}</p>
            <p className="egh-prod-desc">{p.desc}</p>
            <span className="egh-prod-more">View details &rarr;</span>
        </button>
    );
}

function ProductDialog({ d }: { d: DlgItem }) {
    return (
        <dialog id={d.id} className="egh-dlg" aria-label={d.name} onClick={(e) => { if (e.target === e.currentTarget) closeDlg(d.id); }}>
            <div className="egh-dlg-card">
                <button type="button" className="egh-dlg-close" aria-label="Close" onClick={() => closeDlg(d.id)}>&times;</button>
                <div className={d.photo ? 'egh-dlg-media egh-dlg-media--photo' : 'egh-dlg-media'}><img src={d.photo ?? IMG[d.img]} alt={d.name} /></div>
                <div className="egh-dlg-body">
                    <span className="egh-dlg-badge">{d.tag}</span>
                    <h3 className="egh-dlg-name">{d.name}</h3>
                    {d.full.split(/\n\n+/).map((para, i) => (
                        <p className="egh-dlg-desc" key={i}>{para.split('\n').map((line, j) => (
                            <span key={j}>{line}{j < para.split('\n').length - 1 && <br />}</span>
                        ))}</p>
                    ))}
                    {d.highlights.length > 0 && <>
                        <p className="egh-dlg-hl-title">Key highlights</p>
                        <ul className="egh-dlg-hl">
                            {d.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                    </>}
                </div>
            </div>
        </dialog>
    );
}

function ProductsPage() {
    return <>
        <PageHead eyebrow="Products" title="Healthcare solutions for diverse markets" lede="Explore our curated portfolio of certified medical and healthcare products across oral care, dermatology, derma-cosmetics, and pharma OTC categories - trusted by professionals and consumers across international markets." />
        <nav className="egh-catnav" aria-label="Product categories">
            {productCategories.map((c) => (
                <button key={c.id} type="button" className="egh-catnav-link" onClick={(e) => { e.preventDefault(); document.getElementById(`eghcat-${c.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}>{c.title}</button>
            ))}
        </nav>
        <section className="egh-section egh-section-tight">
            {productCategories.map((c) => (
                <div className="egh-cat" id={`eghcat-${c.id}`} key={c.title}>
                    <p className="egh-eyebrow">{c.tagline}</p>
                    <h3 className="egh-h3">{c.title}</h3>
                    <p className="egh-cat-intro">{c.description}</p>
                    <div className="egh-cat-imgs"><img className="egh-cat-img" src={IMG[c.img]} alt={c.bannerAlt} /></div>
                    {c.featureBox && <div className="egh-featbox">
                        <p className="egh-featbox-badge">{c.featureBox.badge}</p>
                        <p className="egh-featbox-title">{c.featureBox.title}</p>
                        <p className="egh-featbox-text">{c.featureBox.text}</p>
                        <div className="egh-featbox-stats">
                            {c.featureBox.stats.map((st) => (
                                <div className="egh-featbox-stat" key={st.label}>
                                    <p className="egh-featbox-stat-value">{st.value}</p>
                                    <p className="egh-featbox-stat-label">{st.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>}
                    {c.products.length > 0 && <div className="egh-prodgrid">
                        {c.products.map((p) => <ProductCard p={p} key={p.name} />)}
                    </div>}
                    {(c.groups ?? []).map((g) => (
                        <div className="egh-prodgroup" key={g.title}>
                            <h4 className="egh-otcsub-title">{g.title}</h4>
                            <div className="egh-prodgrid">
                                {g.products.map((p) => <ProductCard p={p} key={p.name} />)}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            {dlgItems.map((d) => <ProductDialog d={d} key={d.id} />)}
        </section>
    </>;
}

function PartnersPage() {
    return <>
        <PageHead eyebrow="International partners" title="Building connections. Expanding possibilities." lede="We work with trusted international distributors to connect quality healthcare products with new markets and opportunities around the world." />
        <section className="egh-section egh-section-tight">
            <div className="egh-partner-stack">
                {partnerNetwork.map((c) => (
                    <div className="egh-partner-country" id={c.slug} key={c.country}>
                        <p className="egh-partner-country-name">{c.country}</p>
                        <div className="egh-partner-bento">
                            {c.distributors.length === 0 && (
                                <div className="egh-partner-card egh-partner-card-soon">
                                    <p className="egh-partner-soon">Coming soon</p>
                                </div>
                            )}
                            {c.distributors.map((d) => (
                                <div className="egh-partner-card" key={d.name}>
                                    <span className="egh-partner-logo">
                                        <img src={d.logo} alt={`${d.name} logo`} loading="lazy" />
                                    </span>
                                    <p className="egh-partner-name">{d.name}</p>
                                    {d.tag && <p className="egh-partner-tag">{d.tag}</p>}
                                    {d.meta && <p className="egh-partner-meta">{d.meta}</p>}
                                    {d.email && <p className="egh-partner-contact"><a href={`mailto:${d.email}`}>{d.email}</a></p>}
                                    {d.phone && <p className="egh-partner-contact"><a href={`tel:${d.phone}`}>{d.phoneDisplay}</a></p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="egh-band-card">
                <p className="egh-band-card-title">Looking to distribute our products?</p>
                <p className="egh-band-card-text">Let&rsquo;s explore opportunities in your market.</p>
                <a className="egh-btn egh-btn-primary" href={`mailto:${EMAIL}?subject=Distribution%20enquiry`}>Enquire now</a>
            </div>
        </section>
    </>;
}

function ContactPage() {
    return <>
        <PageHead eyebrow="Contact" title="Get in touch" lede="Whether you’re interested in our products, international partnerships, or business opportunities, our team is here to help." />
        <section className="egh-section egh-section-tight">
            <div className="egh-contact-grid">
                <div>
                    <p className="egh-contact-label">Phone</p>
                    <p className="egh-contact-value"><a href="tel:+919605885579">+91 96058 85579</a><br /><a href="tel:+919902877330">+91 99028 77330</a></p>
                </div>
                <div>
                    <p className="egh-contact-label">Email</p>
                    <p className="egh-contact-value"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                </div>
                <div>
                    <p className="egh-contact-label">Dubai</p>
                    <p className="egh-contact-value">Excel Global Health LLC-FZ<br />Dubai, U.A.E.</p>
                </div>
                <div>
                    <p className="egh-contact-label">India</p>
                    <p className="egh-contact-value">Excel Global Health<br />Bengaluru, India</p>
                </div>
                <div>
                    <p className="egh-contact-label">LinkedIn</p>
                    <p className="egh-contact-value"><a href="https://www.linkedin.com/company/excel-global-health/" target="_blank" rel="noreferrer">Excel Global Health</a></p>
                </div>
            </div>
        </section>
    </>;
}

export function App() {
    return <div className="site-shell">
        <Chrome>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Chrome>
    </div>;
}

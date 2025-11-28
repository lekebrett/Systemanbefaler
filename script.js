// --- SUPABASE CONFIG ---
const SUPABASE_URL = 'https://vidzpqjmckqeerkgcwsf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_z898kIhuxnrSsviX-ZqicA_DiF7Es1W';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- FALLBACK DATA ---
let SYSTEM_DATA = {
    "tripletex": {
        "packages": [
            {
                "name": "Basis", "baseMonthly": 179, "establishmentFee": 0, "bilagIncluded": 500,
                "userMonthly": 0, "userEst": 0,
                "features": ["Bilagsføring", "Fakturering", "Mobilapp", "Support", "MVA-melding"],
                "bilagPricing": [{ "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 200 }, { "bilag_low": 1001, "bilag_high": 2000, "priceMonthly": 340 }, { "bilag_low": 2001, "bilag_high": 3500, "priceMonthly": 510 }, { "bilag_low": 3501, "bilag_high": 5000, "priceMonthly": 710 }, { "bilag_low": 5001, "bilag_high": 10000, "priceMonthly": 980 }, { "bilag_low": 10001, "bilag_high": null, "priceMonthly": 1300 }]
            },
            {
                "name": "Smart", "baseMonthly": 279, "establishmentFee": 450, "bilagIncluded": 500,
                "userMonthly": 99, "userEst": 0,
                "features": ["Alt i Basis", "Mulighet for Lønn", "Mulighet for Reise", "Mulighet for Time", "Smart bilagsføring"],
                "bilagPricing": [{ "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 200 }, { "bilag_low": 1001, "bilag_high": 2000, "priceMonthly": 340 }, { "bilag_low": 2001, "bilag_high": 3500, "priceMonthly": 510 }, { "bilag_low": 3501, "bilag_high": 5000, "priceMonthly": 710 }, { "bilag_low": 5001, "bilag_high": 10000, "priceMonthly": 980 }, { "bilag_low": 10001, "bilag_high": null, "priceMonthly": 1300 }]
            },
            {
                "name": "Pro", "baseMonthly": 479, "establishmentFee": 450, "bilagIncluded": 500,
                "userMonthly": 479, "userEst": 500,
                "features": ["Alt i Smart", "Avansert regnskap", "Integrasjoner", "Prioritert support"],
                "bilagPricing": [{ "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 200 }]
            },
            {
                "name": "Komplett", "baseMonthly": 629, "establishmentFee": 450, "bilagIncluded": 500,
                "userMonthly": 349, "userEst": 750,
                "features": ["Alt i Pro", "Prosjektstyring", "Prosjektbudsjett", "Viderefakturering"],
                "bilagPricing": [{ "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 200 }]
            }
        ],
        "industryAddons": [
            { "name": "Landbruk", "industry": "landbruk", "extraMonthly": 0, "establishmentFee": 0 },
            { "name": "Elektro", "industry": "elektro", "extraMonthly": 0, "establishmentFee": 2200, "features": ["Grossist-integrasjon", "Boligmappa", "Bransjespesifikke sjekklister"], "bilagPricingOverride": [{ "bilag_low": 0, "bilag_high": 500, "priceMonthly": 699 }, { "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 899 }, { "bilag_low": 1001, "bilag_high": 2000, "priceMonthly": 1039 }, { "bilag_low": 5001, "bilag_high": 10000, "priceMonthly": 1679 }] },
            { "name": "VVS", "industry": "vvs", "extraMonthly": 0, "establishmentFee": 2200, "features": ["Grossist-integrasjon", "Boligmappa", "Bransjespesifikke sjekklister"], "bilagPricingOverride": [{ "bilag_low": 0, "bilag_high": 500, "priceMonthly": 699 }, { "bilag_low": 501, "bilag_high": 1000, "priceMonthly": 899 }, { "bilag_low": 1001, "bilag_high": 2000, "priceMonthly": 1039 }] }
        ],
        "userAccess": [
            { "type": "timeføring", "monthlyPerUser": 39, "establishmentPerUser": 100 },
            { "type": "lonn_reise", "monthlyPerUser": 65, "establishmentPerUser": 250 }
        ],
        "additionalModules": [{ "module": "lager_logistikk", "baseMonthly": 248, "extraUserMonthly": 49 }],
        "annualCosts": [{ "module": "årsoppgjør", "pricePerYear": 990 }]
    },
    "poweroffice_go": {
        "packages": [
            { "name": "Regnskap", "type": "monthly", "baseMonthly": 385, "bilagIncluded": "unlimited", "features": ["Standard"], "transactionPricing": [{ "transaction": "mix", "price": 9 }] },
            { "name": "Regnskap Mikro", "type": "yearly", "baseYearly": 2195, "bilagIncluded": 150, "extraBilagPrice": 35, "features": ["Mikro"] },
            { "name": "Regnskap Nano", "type": "yearly", "baseYearly": 995, "bilagIncluded": 50, "extraBilagPrice": 35, "features": ["Nano"] }
        ],
        "independentModules": [{ "module": "lonn", "baseMonthly": 165, "perEmployeeMonthly": 35 }],
        "additionalModules": [
            { "module": "timeregistrering", "baseMonthly": 100, "perUserMonthly": 50 },
            { "module": "reiseregning", "baseMonthly": 100, "perUserMonthly": 50 }
        ]
    },
    "sparebank1_regnskap": {
        "packages": [
            { "name": "Basis", "baseMonthly": 159, "features": ["Basis"] },
            { "name": "Basis+", "baseMonthly": 329, "features": ["Basis+"] },
            { "name": "Komplett", "baseMonthly": 490, "features": ["Komplett"] }
        ],
        "additionalModules": [
            { "module": "timeregistrering", "price": 54, "type": "perUserMonthly" },
            { "module": "fravær", "price": 4, "type": "perItem" }
        ],
        "usagePricing": [
            { "item": "reiseregning", "pricePerItem": 33 },
            { "item": "lønnsslipp", "pricePerItem": 39 }
        ],
        "transactions": [{ "type": "mix", "price": 8 }]
    }
};

let GLOBAL_SETTINGS = {
    fees: { newCustomer: 3890, switchSystem: 1789 },
    texts: {
        siteTitle: "Systemkalkulator",
        pageTitle: "Priskalkulator Regnskap",
        setupNew: "Ny kunde (Oppstart)",
        setupSwitch: "Bytte system",
        footerDisclaimer: "* Prisene er estimater ekskl. mva..."
    }
};

const CARD_IDS = { "Tripletex": "card-tripletex", "PowerOffice": "card-po", "SB1": "card-sb1" };

// --- INIT --- 
document.addEventListener('DOMContentLoaded', async () => {
    await loadConfig();
    setupSlider('bilag-input', 'bilag-slider');
    setupSlider('users-input', 'users-slider');
    setupSlider('ansatte-input', 'ansatte-slider');

    const checkPayroll = document.getElementById('check-payroll');
    const options = document.getElementById('payroll-container');

    const togglePayrollUI = () => {
        if (checkPayroll.checked) { options.classList.add('open'); }
        else { options.classList.remove('open'); }
        updateAll();
    };
    checkPayroll.addEventListener('change', togglePayrollUI);
    if (checkPayroll.checked) options.classList.add('open');

    document.querySelectorAll('input, select').forEach(el => el.addEventListener('change', updateAll));
    document.querySelectorAll('input[name="setup-type"]').forEach(el => el.addEventListener('change', updateAll));
    updateAll();
});

// --- SUPABASE FETCH ---
async function loadConfig() {
    const statusBadge = document.getElementById('db-status');
    try {
        const { data, error } = await supabase.from('calculator_config').select('*');
        if (error) throw error;
        if (data && data.length > 0) {
            const tt = data.find(r => r.key === 'tripletex');
            const po = data.find(r => r.key === 'poweroffice_go');
            const sb1 = data.find(r => r.key === 'sparebank1_regnskap');
            const settings = data.find(r => r.key === 'global_settings');

            if (tt) SYSTEM_DATA.tripletex = tt.value;
            if (po) SYSTEM_DATA.poweroffice_go = po.value;
            if (sb1) SYSTEM_DATA.sparebank1_regnskap = sb1.value;
            if (settings) { GLOBAL_SETTINGS = settings.value; applyGlobalSettings(); }

            statusBadge.className = "status-badge status-connected";
            statusBadge.title = "Koblet til database";
        }
    } catch (err) {
        console.warn("Supabase feil:", err);
        statusBadge.className = "status-badge status-fallback";
        statusBadge.title = "Bruker lokal data";
        applyGlobalSettings();
    }
}

function applyGlobalSettings() {
    if (GLOBAL_SETTINGS.texts) {
        if (GLOBAL_SETTINGS.texts.pageTitle) document.title = GLOBAL_SETTINGS.texts.pageTitle;
        if (GLOBAL_SETTINGS.texts.siteTitle) document.getElementById('site-logo-text').innerText = GLOBAL_SETTINGS.texts.siteTitle;
        if (GLOBAL_SETTINGS.texts.footerDisclaimer) document.getElementById('footer-disclaimer').innerText = GLOBAL_SETTINGS.texts.footerDisclaimer;
        if (GLOBAL_SETTINGS.texts.setupNew) document.getElementById('txt-setup-new').innerText = GLOBAL_SETTINGS.texts.setupNew;
        if (GLOBAL_SETTINGS.texts.setupSwitch) document.getElementById('txt-setup-switch').innerText = GLOBAL_SETTINGS.texts.setupSwitch;
    }
    if (GLOBAL_SETTINGS.fees) {
        document.getElementById('price-setup-new').innerText = `Etablering: ${GLOBAL_SETTINGS.fees.newCustomer},-`;
        document.getElementById('price-setup-switch').innerText = `Etablering: ${GLOBAL_SETTINGS.fees.switchSystem},-`;
    }
    if (GLOBAL_SETTINGS.images && GLOBAL_SETTINGS.images.favicon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = GLOBAL_SETTINGS.images.favicon;
    }
}

function setupSlider(numId, rangeId) {
    const num = document.getElementById(numId);
    const range = document.getElementById(rangeId);
    const updateFill = () => {
        const percentage = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(to right, #4195d1 ${percentage}%, #ebeff5 ${percentage}%)`;
    };
    num.addEventListener('input', () => { range.value = num.value; updateFill(); updateAll(); });
    range.addEventListener('input', () => { num.value = range.value; updateFill(); updateAll(); });
    updateFill();
}

function openModal(systemName, packageName) {
    const modal = document.getElementById('package-modal');
    const list = document.getElementById('modal-features-list');

    let features = [];
    let sysKey = systemName === "Tripletex" ? "tripletex" : (systemName === "PowerOffice" ? "poweroffice_go" : "sparebank1_regnskap");

    const dataset = SYSTEM_DATA[sysKey];
    const pack = dataset.packages.find(p => p.name === packageName);
    if (pack && pack.features) features = pack.features;

    if (features.length === 0 && dataset.industryAddons) {
        const addon = dataset.industryAddons.find(a => a.name === packageName);
        if (addon && addon.features) features = addon.features;
    }

    document.getElementById('modal-title').innerText = packageName;
    document.getElementById('modal-system').innerText = systemName;
    list.innerHTML = features.length > 0 ? features.map(f => `<li>${f}</li>`).join('') : `<li>Ingen info.</li>`;

    modal.classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('package-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
}

function updateAll() {
    const state = {
        bilag: parseInt(document.getElementById('bilag-input').value) || 0,
        systemUsers: parseInt(document.getElementById('users-input').value) || 0,
        hasLonn: document.getElementById('check-payroll').checked,
        employees: parseInt(document.getElementById('ansatte-input').value) || 1,
        industry: document.getElementById('select-industry').value,
        setupType: document.querySelector('input[name="setup-type"]:checked').value,
        mod: {
            time: document.getElementById('check-time').checked,
            travel: document.getElementById('check-travel').checked,
            project: document.getElementById('check-project').checked,
            logistics: document.getElementById('check-logistics').checked
        }
    };

    const tt = calcTripletex(state);
    const po = calcPowerOffice(state);
    const sb1 = calcSB1(state);

    renderCard('tt', tt, state);
    renderCard('po', po, state);
    renderCard('sb1', sb1, state);

    rankSystems([tt, po, sb1], state);
}

function calcTripletex(state) {
    const d = SYSTEM_DATA.tripletex;
    let res = { name: "Tripletex", monthly: 0, establish: 0, userEstablish: 0, year1: 0, packages: [], warnings: [], details: [], txCount: 0, txCost: 0 };

    let basePackageName = "Basis";
    if (state.hasLonn || state.mod.travel || state.mod.time || state.mod.logistics || state.mod.project) {
        basePackageName = "Smart";
        if (state.mod.project) basePackageName = "Komplett";
    }

    let packageUserPrice = 0;
    let packageUserEst = 0;

    if (['elektro', 'vvs'].includes(state.industry)) {
        const addon = d.industryAddons.find(a => a.industry === state.industry);
        res.packages.push(addon.name);
        res.establish += addon.establishmentFee || 0;
        const tier = addon.bilagPricingOverride.find(t => state.bilag >= t.bilag_low && (t.bilag_high === null || state.bilag <= t.bilag_high));
        res.monthly += tier ? tier.priceMonthly : 2000;
        packageUserPrice = 99;
    } else {
        const pack = d.packages.find(p => p.name === basePackageName);
        res.packages.push(pack.name);
        res.monthly += pack.baseMonthly || 0;
        res.establish += pack.establishmentFee || 0;
        if (state.bilag > 500 && pack.bilagPricing) {
            const tier = pack.bilagPricing.find(t => state.bilag >= t.bilag_low && (t.bilag_high === null || state.bilag <= t.bilag_high));
            if (tier) res.monthly += tier.priceMonthly;
        }
        if (state.industry === 'landbruk') res.packages.push("Landbruk");

        packageUserPrice = pack.userMonthly || 0;
        packageUserEst = pack.userEst || 0;
    }

    // System Users
    if (state.systemUsers > 0) {
        res.monthly += (packageUserPrice * state.systemUsers);
        let currentUserEst = (packageUserEst * state.systemUsers);
        res.userEstablish += currentUserEst;
        res.establish += currentUserEst;
        let priceLabel = `${packageUserPrice} kr`;
        res.details.push(`${state.systemUsers} systembrukere (${priceLabel})`);
    }

    if (state.hasLonn || state.mod.travel) {
        const access = d.userAccess.find(u => u.type === 'lonn_reise');
        res.monthly += (access.monthlyPerUser * state.employees);
        let accEst = (access.establishmentPerUser || 0) * state.employees;
        res.userEstablish += accEst;
        res.establish += accEst;
        res.packages.push("Lønn/Reise-tilgang");
    }
    if (state.mod.time) {
        const access = d.userAccess.find(u => u.type === 'timeføring');
        res.monthly += (access.monthlyPerUser * state.employees);
        let accEst = (access.establishmentPerUser || 0) * state.employees;
        res.userEstablish += accEst;
        res.establish += accEst;
        res.packages.push("Time-tilgang");
    }
    if (state.mod.logistics) {
        const mod = d.additionalModules.find(m => m.module === 'lager_logistikk');
        res.monthly += mod.baseMonthly + (mod.extraUserMonthly * state.employees);
        res.packages.push("Logistikk");
    }
    res.txCount = state.bilag;
    res.txCost = state.bilag * 8;
    const annual = d.annualCosts[0].pricePerYear || 0;
    res.year1 = (res.monthly * 12) + res.establish + annual + res.txCost;
    if (state.hasLonn) res.details.push(`Lønn (${state.employees} ansatte)`);
    if (state.mod.time) res.details.push("Timeføring");
    return res;
}

function calcPowerOffice(state) {
    const d = SYSTEM_DATA.poweroffice_go;
    let res = { name: "PowerOffice", monthly: 0, establish: 0, year1: 0, packages: [], warnings: [], details: [], txCount: 0, txCost: 0 };
    const needsAccounting = state.bilag > 0 || state.mod.time || state.mod.project || state.mod.logistics || (state.mod.travel && !state.hasLonn);
    let packName = null;
    let packageYearlyCost = 0;
    let totalTxCost = state.bilag * 9;
    if (needsAccounting) {
        const needsStandard = state.mod.project || state.mod.logistics;
        let options = [];
        if (!needsStandard) {
            let nanoBase = 995;
            let extraBilag = Math.max(0, state.bilag - 50);
            let cost = nanoBase + (extraBilag * 35);
            options.push({ name: "Regnskap Nano", cost: cost, monthlyDisp: cost / 12, penalty: extraBilag * 35 });
        }
        if (!needsStandard) {
            let mikroBase = 2195;
            let extraBilag = Math.max(0, state.bilag - 150);
            let cost = mikroBase + (extraBilag * 35);
            options.push({ name: "Regnskap Mikro", cost: cost, monthlyDisp: cost / 12, penalty: extraBilag * 35 });
        }
        let stdBase = 385 * 12;
        options.push({ name: "Regnskap", cost: stdBase, monthlyDisp: 385, penalty: 0 });
        options.sort((a, b) => a.cost - b.cost);
        let winner = options[0];
        packName = winner.name;
        res.packages.push(packName);
        res.monthly += winner.monthlyDisp;
        packageYearlyCost = winner.cost;
        if (winner.penalty > 0) { res.details.push(`Inkl. straffegebyr for overskytende bilag`); }
    }
    if (state.industry === 'landbruk') res.packages.push("Landbruk");
    if (state.mod.logistics) res.warnings.push("Mangler lager/logistikk");
    if (['elektro', 'vvs'].includes(state.industry)) res.warnings.push(`Ikke spesialisert for ${state.industry}`);
    if (state.systemUsers > 0) res.details.push(`${state.systemUsers} systembrukere (0 kr)`);
    let modMonthly = 0;
    if (state.hasLonn) {
        const m = d.independentModules.find(x => x.module === 'lonn');
        modMonthly += m.baseMonthly + (m.perEmployeeMonthly * state.employees);
        res.packages.push("Lønn");
        res.details.push(`Lønn (${state.employees} ansatte)`);
    }
    if (state.mod.time || state.mod.project) {
        const m = d.additionalModules.find(x => x.module === 'timeregistrering');
        modMonthly += m.baseMonthly + (m.perUserMonthly * state.employees);
        res.packages.push("Time");
    }
    if (state.mod.travel) {
        const m = d.additionalModules.find(x => x.module === 'reiseregning');
        modMonthly += m.baseMonthly + (m.perUserMonthly * state.employees);
        res.packages.push("Reise");
    }
    res.monthly += modMonthly;
    res.txCount = state.bilag;
    res.txCost = totalTxCost;
    res.year1 = packageYearlyCost + (modMonthly * 12) + totalTxCost;
    return res;
}

function calcSB1(state) {
    const d = SYSTEM_DATA.sparebank1_regnskap;
    let res = { name: "SB1", monthly: 0, establish: 0, year1: 0, packages: [], warnings: [], details: [], txCount: state.bilag, txCost: 0 };
    let packName = "Basis";
    if (state.bilag > 150 || state.mod.time || state.mod.project || state.hasLonn) { packName = "Basis+"; }
    const pack = d.packages.find(p => p.name === packName);
    res.packages.push(pack.name);
    res.monthly += pack.baseMonthly;
    if (state.systemUsers > 1) {
        let extraUsers = state.systemUsers - 1;
        let extraCost = extraUsers * 54;
        res.monthly += extraCost;
        res.details.push(`${extraUsers} ekstra systembrukere`);
    } else if (state.systemUsers === 1) {
        res.details.push(`1 systembruker (inkludert)`);
    }
    if (state.industry === 'landbruk') res.packages.push("Landbruk");
    if (state.mod.logistics) res.warnings.push("Mangler lager/logistikk");
    if (['elektro', 'vvs'].includes(state.industry)) res.warnings.push(`Ikke spesialisert for ${state.industry}`);
    let usageYearly = 0;
    let fixedMod = 0;
    if (state.hasLonn) {
        const price = d.usagePricing.find(x => x.item === 'lønnsslipp').pricePerItem;
        usageYearly += (price * state.employees * 12);
        res.packages.push("Lønn");
        res.details.push("Lønn (pris pr slipp)");
    }
    if (state.mod.time || state.mod.project) {
        const m = d.additionalModules.find(x => x.module === 'timeregistrering');
        fixedMod += (m.price * state.employees);
        res.packages.push("Time");
    }
    if (state.mod.travel) {
        const price = d.usagePricing.find(x => x.item === 'reiseregning').pricePerItem;
        usageYearly += (price * state.employees * 12);
        res.packages.push("Reise");
    }
    res.monthly += fixedMod;
    res.monthly += (usageYearly / 12);
    res.txCost = state.bilag * 8;
    res.year1 = (pack.baseMonthly * 12) + (fixedMod * 12) + usageYearly + res.txCost;
    return res;
}

function renderCard(prefix, data, state) {
    document.getElementById(`${prefix}-packages`).innerHTML = data.packages.map(p =>
        `<span class="package-pill clickable" onclick="openModal('${data.name}', '${p}')">${p}</span>`
    ).join('');

    document.getElementById(`${prefix}-monthly`).innerText = Math.round(data.monthly).toLocaleString();

    let customerSetupFee = state.setupType === 'new' ? GLOBAL_SETTINGS.fees.newCustomer : GLOBAL_SETTINGS.fees.switchSystem;
    let customerSetupName = state.setupType === 'new' ? GLOBAL_SETTINGS.texts.setupNew : GLOBAL_SETTINGS.texts.setupSwitch;

    const setupContainer = document.getElementById(`${prefix}-setup-container`);
    setupContainer.innerHTML = "";

    let row1 = document.createElement("div");
    row1.className = "cost-row";
    row1.innerHTML = `<span>Oppstart <span style="font-size:0.8em">${customerSetupName}</span>:</span> <span>${customerSetupFee.toLocaleString()} kr</span>`;
    setupContainer.appendChild(row1);

    if (data.establish > 0) {
        let userEst = data.userEstablish || 0;
        let sysEst = data.establish - userEst;

        if (sysEst > 0) {
            let row2 = document.createElement("div");
            row2.className = "cost-row";
            row2.innerHTML = `<span>Etablering system:</span> <span>${sysEst.toLocaleString()} kr</span>`;
            setupContainer.appendChild(row2);
        }
        if (userEst > 0) {
            let row3 = document.createElement("div");
            row3.className = "cost-row";
            row3.innerHTML = `<span>Etablering brukere:</span> <span>${userEst.toLocaleString()} kr</span>`;
            setupContainer.appendChild(row3);
        }
    }

    let finalTotal = data.year1 + customerSetupFee;
    document.getElementById(`${prefix}-yearly`).innerText = Math.round(finalTotal).toLocaleString() + " kr";

    const ul = document.getElementById(`${prefix}-details`);
    ul.innerHTML = '';
    data.details.forEach(d => ul.innerHTML += `<li>${d}</li>`);

    const txDiv = document.getElementById(`${prefix}-tx`);
    if (data.txCount > 0 || data.txCost > 0) {
        let costLabel = Math.round(data.txCost).toLocaleString();
        let perTx = (data.txCost / (data.txCount || 1)).toFixed(0);
        txDiv.innerHTML = `<span>${data.txCount} transaksjoner</span> <strong>${costLabel} kr/år</strong> <small>(snitt ${perTx} kr/stk)</small>`;
    } else {
        txDiv.innerHTML = `<span>0 transaksjoner</span>`;
    }

    const wDiv = document.getElementById(`${prefix}-warnings`);
    wDiv.innerHTML = '';
    data.warnings.forEach(w => wDiv.innerHTML += `<div class="warning-item">⚠️ ${w}</div>`);
}

function rankSystems(results, state) {
    results.forEach(r => {
        const card = getCardEl(r.name);
        card.classList.remove('cheapest', 'recommended');
        card.querySelector('.badges-container').innerHTML = '';
    });

    let setupFee = state.setupType === 'new' ? GLOBAL_SETTINGS.fees.newCustomer : GLOBAL_SETTINGS.fees.switchSystem;
    const sorted = [...results].sort((a, b) => (a.year1 + setupFee) - (b.year1 + setupFee));
    const cheapest = sorted[0];
    const cCard = getCardEl(cheapest.name);
    cCard.classList.add('cheapest');
    cCard.querySelector('.badges-container').innerHTML += '<span class="badge cheap">Billigst</span>';

    let rec = cheapest;
    if (['elektro', 'vvs'].includes(state.industry) || state.mod.logistics) {
        rec = results.find(r => r.name === "Tripletex");
    }
    const rCard = getCardEl(rec.name);
    if (rec.name !== cheapest.name) {
        rCard.classList.add('recommended');
        rCard.querySelector('.badges-container').innerHTML += '<span class="badge rec">Anbefalt</span>';
    } else {
        rCard.querySelector('.badges-container').innerHTML += '<span class="badge rec" style="margin-left:5px">Anbefalt</span>';
    }
}

function getCardEl(name) {
    if (name === "Tripletex") return document.getElementById('card-tripletex');
    if (name === "PowerOffice") return document.getElementById('card-po');
    return document.getElementById('card-sb1');
}
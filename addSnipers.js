const weaponCardTemplate = document.querySelector("[weapon-card-template]");
const dataContainer = document.querySelector("[data-sniperRifles]");

fetch('./Snipers.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(weapon => {
            const weapons = weaponCardTemplate.content.cloneNode(true);
            const icon = weapons.querySelector("[data-icon]");
            const name = weapons.querySelector("[data-name]");
            const description = weapons.querySelector("[data-description]");
            const comDmg = weapons.querySelector("[data-comDmg]");
            const uncDmg = weapons.querySelector("[data-uncDmg]");
            const rarDmg = weapons.querySelector("[data-rarDmg]");
            const epiDmg = weapons.querySelector("[data-epiDmg]");
            const legDmg = weapons.querySelector("[data-legDmg]");
            const comDmgDiv = weapons.querySelector("[data-comDmgDiv]");
            const uncDmgDiv = weapons.querySelector("[data-uncDmgDiv]");
            const rarDmgDiv = weapons.querySelector("[data-rarDmgDiv]");
            const epiDmgDiv = weapons.querySelector("[data-epiDmgDiv]");
            const legDmgDiv = weapons.querySelector("[data-legDmgDiv]");

            const comRel = weapons.querySelector("[data-comRel]");
            const uncRel = weapons.querySelector("[data-uncRel]");
            const rarRel = weapons.querySelector("[data-rarRel]");
            const epiRel = weapons.querySelector("[data-epiRel]");
            const legRel = weapons.querySelector("[data-legRel]");
            const comRelDiv = weapons.querySelector("[data-comRelDiv]");
            const uncRelDiv = weapons.querySelector("[data-uncRelDiv]");
            const rarRelDiv = weapons.querySelector("[data-rarRelDiv]");
            const epiRelDiv = weapons.querySelector("[data-epiRelDiv]");
            const legRelDiv = weapons.querySelector("[data-legRelDiv]");

            const fireRate = weapons.querySelector("[data-fireRate]");
            const fireRateDiv = weapons.querySelector("[data-fireRateDiv]");

            const magSize = weapons.querySelector("[data-MagSize]");
            const magSizeDiv = weapons.querySelector("[data-magSizeDiv]");

            const EXMagSize = weapons.querySelector("[data-EXMagSize]");
            const EXMagSizeDiv = weapons.querySelector("[data-EXMagSizeDiv]");

            const link = weapons.querySelector("[data-link]");

            icon.src = weapon.Icon;
            name.innerText = weapon.Name;
            description.innerText = weapon.Description;
            link.href = weapon.Link;
            comDmg.innerText = weapon.Common.Damage;
            uncDmg.innerText = weapon.Uncommon.Damage;
            rarDmg.innerText = weapon.Rare.Damage;
            epiDmg.innerText = weapon.Epic.Damage;
            legDmg.innerText = weapon.Legendary.Damage;

            comDmgDiv.style.width = ((weapon.Common.Damage / weapon.HighestCatDmg) *100) + "%";
            uncDmgDiv.style.width = (((weapon.Uncommon.Damage - weapon.Common.Damage) / weapon.HighestCatDmg)*100) + "%";
            rarDmgDiv.style.width = (((weapon.Rare.Damage - weapon.Uncommon.Damage) / weapon.HighestCatDmg)*100) + "%";
            epiDmgDiv.style.width = (((weapon.Epic.Damage - weapon.Rare.Damage) / weapon.HighestCatDmg)*100) + "%";
            legDmgDiv.style.width = (((weapon.Legendary.Damage - weapon.Epic.Damage) / weapon.HighestCatDmg)*100) + "%";

            comRel.innerText = weapon.Common.Reload;
            uncRel.innerText = weapon.Uncommon.Reload;
            rarRel.innerText = weapon.Rare.Reload;
            epiRel.innerText = weapon.Epic.Reload;
            legRel.innerText = weapon.Legendary.Reload;

            legRelDiv.style.width = ((weapon.Legendary.Reload / weapon.HighestCatRel)*100) + "%";
            epiRelDiv.style.width = (((weapon.Epic.Reload - weapon.Legendary.Reload) / weapon.HighestCatRel)*100) + "%";
            rarRelDiv.style.width = (((weapon.Rare.Reload - weapon.Epic.Reload) / weapon.HighestCatRel)*100) + "%";
            uncRelDiv.style.width = (((weapon.Uncommon.Reload - weapon.Rare.Reload) / weapon.HighestCatRel)*100) + "%";
            comRelDiv.style.width = (((weapon.Common.Reload - weapon.Uncommon.Reload) / weapon.HighestCatRel)*100) + "%";

            fireRate.innerText = weapon.FireRate;
            fireRateDiv.style.width = ((weapon.FireRate / weapon.HighestCatFireRate)*100) + "%";

            magSize.innerText = weapon.MagazineSize;
            magSizeDiv.style.width = ((weapon.MagazineSize / weapon.HighestCatMagazineSize) * 100) + "%";

            if (weapon.MagazineSizeEX != null) {
            EXMagSize.innerText = "/" + weapon.MagazineSizeEX;
            EXMagSizeDiv.style.width = (((weapon.MagazineSizeEX - weapon.MagazineSize) / weapon.HighestCatMagazineSize) * 100) + "%";
            }
            

            dataContainer.append(weapons);
        })
    });
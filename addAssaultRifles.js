var weaponCardTemplate = document.querySelector("[weapon-card-template]");
const searchInput = document.querySelector("[data-search]");

let weaponArray = [];


searchInput.addEventListener("input", e => {
    const value = e.target.value;
    weaponArray.forEach(weapon => {
        const isVisible = weapon.name.toLowerCase().includes(value.toLowerCase());
        weapon.element.classList.toggle("hide", !isVisible);
    })
})


    fetch('./AssaultRifles.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-assaultRifles]"));
        })
    fetch('./Shotguns.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-shotguns]"));
        }
        )
    fetch('./SMGs.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-smgs]"));
        }

        )
    fetch('./Snipers.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-sniperRifles]"));
        }
        )

    fetch('./Pistols.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-pistols]"));
        }
        )

    fetch('./Bows.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-bows]"));
        }
        )

    fetch('./ExplosiveWeapons.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-explosiveWeapons]"));
        }
        )

    fetch('./Melee.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-meleeWeapons]"));
        }
        )

    fetch('./MarksmanRifles.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-marksmanRifles]"));
        }

        )
    fetch('./Crossbows.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-crossbows]"));
        }

        )




    function makeCardTemplate(data, dataContainer) {
        weaponArray = data.map(weapon => {
            var weapons = weaponCardTemplate.content.cloneNode(true);
            var icon = weapons.querySelector("[data-icon]");
            var name = weapons.querySelector("[data-name]");
            var description = weapons.querySelector("[data-description]");
            var comDmg = weapons.querySelector("[data-comDmg]");
            var uncDmg = weapons.querySelector("[data-uncDmg]");
            var rarDmg = weapons.querySelector("[data-rarDmg]");
            var epiDmg = weapons.querySelector("[data-epiDmg]");
            var legDmg = weapons.querySelector("[data-legDmg]");
            var comDmgDiv = weapons.querySelector("[data-comDmgDiv]");
            var uncDmgDiv = weapons.querySelector("[data-uncDmgDiv]");
            var rarDmgDiv = weapons.querySelector("[data-rarDmgDiv]");
            var epiDmgDiv = weapons.querySelector("[data-epiDmgDiv]");
            var legDmgDiv = weapons.querySelector("[data-legDmgDiv]");

            var comRel = weapons.querySelector("[data-comRel]");
            var uncRel = weapons.querySelector("[data-uncRel]");
            var rarRel = weapons.querySelector("[data-rarRel]");
            var epiRel = weapons.querySelector("[data-epiRel]");
            var legRel = weapons.querySelector("[data-legRel]");
            var comRelDiv = weapons.querySelector("[data-comRelDiv]");
            var uncRelDiv = weapons.querySelector("[data-uncRelDiv]");
            var rarRelDiv = weapons.querySelector("[data-rarRelDiv]");
            var epiRelDiv = weapons.querySelector("[data-epiRelDiv]");
            var legRelDiv = weapons.querySelector("[data-legRelDiv]");

            var fireRate = weapons.querySelector("[data-fireRate]");
            var fireRateDiv = weapons.querySelector("[data-fireRateDiv]");

            var magSize = weapons.querySelector("[data-MagSize]");
            var magSizeDiv = weapons.querySelector("[data-magSizeDiv]");

            var EXMagSize = weapons.querySelector("[data-EXMagSize]");
            var EXMagSizeDiv = weapons.querySelector("[data-EXMagSizeDiv]");

            var link = weapons.querySelector("[data-link]");

            icon.src = weapon.Icon;
            name.innerText = weapon.Name;
            description.innerText = weapon.Description;
            link.href = weapon.Link;
            comDmg.innerText = weapon.Common.Damage;
            uncDmg.innerText = weapon.Uncommon.Damage;
            rarDmg.innerText = weapon.Rare.Damage;
            epiDmg.innerText = weapon.Epic.Damage;
            legDmg.innerText = weapon.Legendary.Damage;

            comDmgDiv.style.width = ((weapon.Common.Damage / weapon.HighestCatDmg) * 100) + "%";
            uncDmgDiv.style.width = (((weapon.Uncommon.Damage - weapon.Common.Damage) / weapon.HighestCatDmg) * 100) + "%";
            rarDmgDiv.style.width = (((weapon.Rare.Damage - weapon.Uncommon.Damage) / weapon.HighestCatDmg) * 100) + "%";
            epiDmgDiv.style.width = (((weapon.Epic.Damage - weapon.Rare.Damage) / weapon.HighestCatDmg) * 100) + "%";
            legDmgDiv.style.width = (((weapon.Legendary.Damage - weapon.Epic.Damage) / weapon.HighestCatDmg) * 100) + "%";

            comRel.innerText = weapon.Common.Reload;
            uncRel.innerText = weapon.Uncommon.Reload;
            rarRel.innerText = weapon.Rare.Reload;
            epiRel.innerText = weapon.Epic.Reload;
            legRel.innerText = weapon.Legendary.Reload;

            legRelDiv.style.width = ((weapon.Legendary.Reload / weapon.HighestCatRel) * 100) + "%";
            epiRelDiv.style.width = (((weapon.Epic.Reload - weapon.Legendary.Reload) / weapon.HighestCatRel) * 100) + "%";
            rarRelDiv.style.width = (((weapon.Rare.Reload - weapon.Epic.Reload) / weapon.HighestCatRel) * 100) + "%";
            uncRelDiv.style.width = (((weapon.Uncommon.Reload - weapon.Rare.Reload) / weapon.HighestCatRel) * 100) + "%";
            comRelDiv.style.width = (((weapon.Common.Reload - weapon.Uncommon.Reload) / weapon.HighestCatRel) * 100) + "%";

            fireRate.innerText = weapon.FireRate;
            fireRateDiv.style.width = ((weapon.FireRate / weapon.HighestCatFireRate) * 100) + "%";

            magSize.innerText = weapon.MagazineSize;
            magSizeDiv.style.width = ((weapon.MagazineSize / weapon.HighestCatMagazineSize) * 100) + "%";

            if (weapon.MagazineSizeEX != null) {
                EXMagSize.innerText = "/" + weapon.MagazineSizeEX;
                EXMagSizeDiv.style.width = (((weapon.MagazineSizeEX - weapon.MagazineSize) / weapon.HighestCatMagazineSize) * 100) + "%";
            }

            dataContainer.append(weapons);
            return { name: weapon.Name, element: weaponCardTemplate }
        });
    }
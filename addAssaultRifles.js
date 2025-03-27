var weaponCardTemplate = document.querySelector("[weapon-card-template]");
const searchInput = document.querySelector("[data-search]");

let weaponArray = [];
let tempWeaponArray = [];


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    weaponArray.forEach(weapon => {
        const isVisible = weapon.name.toLowerCase().includes(value);
        weapon.element.classList.toggle("hide", !isVisible);
        console.log(weapon)
    })
})


    fetch('./AssaultRifles.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-assaultRifles]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        })
    fetch('./Shotguns.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-shotguns]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )
    fetch('./SMGs.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-smgs]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }

        )
    fetch('./Snipers.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-sniperRifles]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )

    fetch('./Pistols.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-pistols]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )

    fetch('./Bows.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-bows]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )

    fetch('./ExplosiveWeapons.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-explosiveWeapons]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )

    fetch('./Melee.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-meleeWeapons]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }
        )

    fetch('./MarksmanRifles.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-marksmanRifles]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }

        )
    fetch('./Crossbows.json')
        .then(res => res.json())
        .then(data => {
            makeCardTemplate(data, document.querySelector("[data-crossbows]"));
            weaponArray = weaponArray.concat(tempWeaponArray);
        }

        )




    function makeCardTemplate(data, dataContainer) {
        tempWeaponArray = data.map(weapon => {
            var weapons = weaponCardTemplate.content.cloneNode(true).children[0];
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
            return { name: weapon.Name, element: weapons }
        });
    }
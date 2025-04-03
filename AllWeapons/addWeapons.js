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

            if (weapon.Common != null) {
                comDmgDiv.style.width = ((weapon.Common.Damage / weapon.HighestCatDmg) * 100) + "%";

                comDmg.innerText = weapon.Common.Damage;
            }
            else {
                comDmgDiv.style.width = "0%";
                comDmg.innerText = "";
            }
            if (weapon.Uncommon != null) {
                if (weapon.Common != null) {
                    uncDmgDiv.style.width = (((weapon.Uncommon.Damage - weapon.Common.Damage) / weapon.HighestCatDmg) * 100) + "%";
                } else {
                    uncDmgDiv.style.width = ((weapon.Uncommon.Damage / weapon.HighestCatDmg) * 100) + "%";
                }
                uncDmg.innerText = weapon.Uncommon.Damage;
            }
            else {
                uncDmgDiv.style.width = "0%";
                uncDmg.innerText = "";
            }
            if (weapon.Rare != null) {
                if (weapon.Uncommon != null) {
                    rarDmgDiv.style.width = (((weapon.Rare.Damage - weapon.Uncommon.Damage) / weapon.HighestCatDmg) * 100) + "%";
                } else {
                    rarDmgDiv.style.width = ((weapon.Rare.Damage / weapon.HighestCatDmg) * 100) + "%";
                }
                rarDmg.innerText = weapon.Rare.Damage;
            }
            else {
                rarDmgDiv.style.width = "0%";
                rarDmg.innerText = "";
            }
            if (weapon.Epic != null) {
                if (weapon.Rare != null) {
                    epiDmgDiv.style.width = (((weapon.Epic.Damage - weapon.Rare.Damage) / weapon.HighestCatDmg) * 100) + "%";
                } else {
                    epiDmgDiv.style.width = ((weapon.Epic.Damage / weapon.HighestCatDmg) * 100) + "%";
                }

                epiDmg.innerText = weapon.Epic.Damage;
            }
            else {
                epiDmgDiv.style.width = "0%";
                epiDmg.innerText = "";
            }
            if (weapon.Legendary != null) {
                if (weapon.Epic != null) {
                    legDmgDiv.style.width = (((weapon.Legendary.Damage - weapon.Epic.Damage) / weapon.HighestCatDmg) * 100) + "%";
                } else {
                    legDmgDiv.style.width = ((weapon.Legendary.Damage / weapon.HighestCatDmg) * 100) + "%";
                }
                legDmg.innerText = weapon.Legendary.Damage;
            }
            else {
                legDmgDiv.style.width = "0%";
                legDmg.innerText = "";
            }
            
            if (weapon.Legendary != null) {
                legRelDiv.style.width = ((weapon.Legendary.Reload / weapon.HighestCatReload) * 100) + "%";
                legRel.innerText = weapon.Legendary.Reload;
            }
            else {
                legRelDiv.style.width = "0%";
                legRel.innerText = "";
            }

            if (weapon.Epic != null) {
                if (weapon.Legendary.Reload != null) {
                    epiRelDiv.style.width = (((weapon.Epic.Reload - weapon.Legendary.Reload) / weapon.HighestCatReload) * 100) + "%";
                }
                else {
                    epiRelDiv.style.width = ((weapon.Epic.Reload / weapon.HighestCatReload) * 100) + "%";
                }
                epiRel.innerText = weapon.Epic.Reload;
            }

            else {
                epiRelDiv.style.width = "0%";
                epiRel.innerText = "";
            }
            if (weapon.Rare != null) {
                if (weapon.Epic != null) {
                    rarRelDiv.style.width = (((weapon.Rare.Reload - weapon.Epic.Reload) / weapon.HighestCatReload) * 100) + "%";
                }
                else {
                    rarRelDiv.style.width = ((weapon.Rare.Reload / weapon.HighestCatReload) * 100) + "%";
                }
                rarRel.innerText = weapon.Rare.Reload;
            }

            else {
                rarRelDiv.style.width = "0%";
                rarRel.innerText = "";
            }
            if (weapon.Uncommon != null) {
                if (weapon.Rare != null) {
                    uncRelDiv.style.width = (((weapon.Uncommon.Reload - weapon.Rare.Reload) / weapon.HighestCatReload) * 100) + "%";
                }
                else {
                    uncRelDiv.style.width = ((weapon.Uncommon.Reload / weapon.HighestCatReload) * 100) + "%";
                }
                uncRel.innerText = weapon.Uncommon.Reload;
            }
            else {
                uncRelDiv.style.width = "0%";
                uncRel.innerText = "";
            }

            if (weapon.Common != null) {
                if (weapon.Uncommon != null) {
                    comRelDiv.style.width = (((weapon.Common.Reload - weapon.Uncommon.Reload) / weapon.HighestCatReload) * 100) + "%";
                }
                else {
                    comRelDiv.style.width = ((weapon.Common.Reload / weapon.HighestCatReload) * 100) + "%";
                }
                comRel.innerText = weapon.Common.Reload;
            }
            else {
                comRelDiv.style.width = "0%";
                comRel.innerText = "";
            }

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
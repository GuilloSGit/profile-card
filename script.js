function age(dateString) {
            let birth = new Date(dateString);
            let now = new Date();
            let beforeBirth = ((() => { birth.setDate(now.getDate()); birth.setMonth(now.getMonth()); return birth.getTime() })() < birth.getTime()) ? 0 : 1;
            edadActual = now.getFullYear() - birth.getFullYear() - beforeBirth;
        }
        age('12/13/1986');
        document.getElementById("edad").innerHTML = `<span class="card__text card__text--light">(`+edadActual+`)</span>`;
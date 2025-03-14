const OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0940d12c10msh0416bc3fb85b9d4p1cb609jsn1b2bfb6e95c5',
		'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
	}
};

const apiFetch = async (ip) => {
    try {
        const response = await fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, OPTIONS);
        const result = await response.json();
        return result;
    }
    catch(err) { console.error(err) }
}



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#input');
    const submitBtn =  document.querySelector('#submit-btn')
    const resultsWrap = document.querySelector('#results')

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        // save input value in 'value' const
        const {value} = input;
        if(!value) return;

        submitBtn.setAttribute('disable','');
        submitBtn.setAttribute('aria-busy', 'true');

        const ipInfo = await apiFetch(value);
        resultsWrap.innerHTML = JSON.stringify(ipInfo, null, 2)

        submitBtn.removeAttribute('disable','');
        submitBtn.removeAttribute('aria-busy', 'false');

    })
})
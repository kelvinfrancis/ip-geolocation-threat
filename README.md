# IP Geolocation Finder

Este proyecto es una aplicación simple que permite obtener información sobre una dirección IP utilizando la API de RapidAPI.

## Tecnologías utilizadas
- **JavaScript**
- **Fetch API**
- **RapidAPI**
- **HTML & DOM Manipulation**

## Funcionamiento
El código realiza una solicitud a la API de RapidAPI para obtener información de geolocalización basada en la IP ingresada por el usuario.

### Flujo de trabajo
1. El usuario ingresa una IP y presiona "Buscar IP".
2. Se deshabilita el botón mientras se procesa la solicitud.
3. Se realiza una petición `GET` a la API con la IP proporcionada.
4. La respuesta JSON se muestra en pantalla.
5. El botón se habilita nuevamente.

## Código principal
```javascript
const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'TU_API_KEY',
        'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
    }
};

const apiFetch = async (ip) => {
    try {
        const response = await fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, OPTIONS);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
};
```

## Licencia
Este proyecto está bajo la licencia MIT.


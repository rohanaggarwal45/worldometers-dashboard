document.addEventListener('DOMContentLoaded', () => {
    const dashboardContainer = document.getElementById('dashboard-container');
    dashboardContainer.innerHTML = '<p>Loading data...</p>';

    fetch('https://your-api.com/worldometers/population')
        .then(response => response.json())
        .then(data => {
            dashboardContainer.innerHTML = `
                <div>
                    <h2>World Population: ${data.total_population}</h2>
                    <p>Births Today: ${data.births_today}</p>
                    <p>Deaths Today: ${data.deaths_today}</p>
                </div>
            `;
        })
        .catch(error => {
            dashboardContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
        });
});

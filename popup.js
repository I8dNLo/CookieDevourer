chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        var cookieTable = document.getElementById('cookieTable').getElementsByTagName('tbody')[0];
        var badCookieScore = 0;

        cookies.forEach(function (cookie) {
            var row = cookieTable.insertRow();
            var nameCell = row.insertCell(0);
            var valueCell = row.insertCell(1);
            var dangerCell = row.insertCell(2); // New cell for danger level
            var length_congst = 15;

            // Randomly assign danger level
            var dangerLevels = ['minor', 'medium', 'major'];
            var randomIndex = Math.floor(Math.random() * dangerLevels.length);
            var dangerLevel = dangerLevels[randomIndex];

            // Set text content for name and value cells
            nameCell.textContent = (cookie.name.length > length_congst) ? cookie.name.slice(0, length_congst) + "..." : cookie.name;
            valueCell.textContent = (cookie.value.length > length_congst) ? cookie.value.slice(0, length_congst) + "..." : cookie.value;

            // Set text content and style for danger cell
            dangerCell.textContent = dangerLevel;
            dangerCell.classList.add(dangerLevel);

            // Calculate bad cookie score
            if (dangerLevel === 'medium') {
                badCookieScore += 1;
            } else if (dangerLevel === 'minor') {
                badCookieScore += 0.5;
            } else if (dangerLevel === 'major') {
                badCookieScore += 2;
            }
        });

        // Calculate log2 of the sum and display it
        var log2Score = Math.log2(badCookieScore);
        document.getElementById('badCookieScore').textContent += log2Score;
    });
});

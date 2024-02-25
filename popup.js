// Function to calculate the danger level and value cell content of a cookie
function calculateCookieInfo(cookieName, cookieValue) {
    const maxLength = 15;
    var dangerLevel;
    var valueCellContent;

    // Calculate danger level
    if (cookieValue.length > 10) {
        dangerLevel = 'major';
    } else if (cookieValue.length > 5) {
        dangerLevel = 'medium';
    } else {
        dangerLevel = 'minor';
    }

    // Calculate content for value cell
    valueCellContent = cookieValue.length > maxLength ? cookieValue.slice(0, maxLength) + "..." : cookieValue;

    return { dangerLevel: dangerLevel, valueCellContent: valueCellContent };
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        var cookieTable = document.getElementById('cookieTable').getElementsByTagName('tbody')[0];
        var badCookieScore = 0;

        cookies.forEach(function (cookie) {
            var row = cookieTable.insertRow();
            var nameCell = row.insertCell(0);
            var valueCell = row.insertCell(1);
            var dangerCell = row.insertCell(2); // New cell for danger level

            // Calculate cookie info
            var cookieInfo = calculateCookieInfo(cookie.name, cookie.value);

            // Set text content for name cell
            nameCell.textContent = cookieInfo.valueCellContent;

            // Set text content for value cell
            valueCell.textContent = cookieInfo.valueCellContent;

            // Set text content and style for danger cell
            dangerCell.textContent = cookieInfo.dangerLevel;
            dangerCell.classList.add(cookieInfo.dangerLevel);

            // Calculate bad cookie score
            if (cookieInfo.dangerLevel === 'medium') {
                badCookieScore += 1;
            } else if (cookieInfo.dangerLevel === 'minor') {
                badCookieScore += 0.5;
            } else if (cookieInfo.dangerLevel === 'major') {
                badCookieScore += 2;
            }
        });

        // Calculate log2 of the sum and display it
        var log2Score = Math.log2(badCookieScore);
        document.getElementById('badCookieScore').textContent += log2Score;
    });
});

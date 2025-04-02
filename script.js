// your code here
document.getElementById("button").addEventListener("click", function() {
            const name = document.getElementById("name").value.trim();
            const year = document.getElementById("year").value.trim();
            let queryString = "";
            
            if (name && year) {
                queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
            } else if (name) {
                queryString = `?name=${encodeURIComponent(name)}`;
            } else if (year) {
                queryString = `?year=${encodeURIComponent(year)}`;
            }
            
            document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
        });
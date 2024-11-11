
document.addEventListener("DOMContentLoaded", function() 
{
    let vip = false;  // Boolean for vip
    let age = 16;     // Default age
    let accessGranted = false;  // Boolean access verifyer

    // event listener
    document.getElementById("enterBtn").addEventListener("click", function() 
    {
        // values from the input and checkbox
        age = parseInt(document.getElementById("age").value);  // Age
        vip = document.getElementById("vip").checked;          // vip checkbox

        // Determine access based on the age and VIP status
        if (vip) 
        {
            // If the user is a VIP, access is granted regardless of age
            accessGranted = true;
            alert("Welcome in my VIP ;)");
        } 
        else 
        {
            // If not a VIP, check age for access
            if (age >= 18) {
                accessGranted = true;  // Access granted if age >= 18
                alert("Access granted");
            } else {
                accessGranted = false;  // Deny access if age < 18
                alert("Access denied");
            }
        }

        // If access is not granted, explicitly show a denial message
        if (!accessGranted) 
        {
            console.log("You do not have access.");
        }
    });
});
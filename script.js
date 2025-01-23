document.getElementById("googleLoginBtn").addEventListener("click", function() {
    // Simulating a Google login
    // In a real app, this would use the Google API for authentication
    alert("Google Login Successful!");

    // Show calendar data section
    document.getElementById("calendarData").classList.remove("hidden");

    // Simulate fetching the calendar and showing the next event
    setTimeout(() => {
        const nextEvent = "Meeting with Team at 3:00 PM";
        document.getElementById("nextEvent").textContent = `Next event: ${nextEvent}`;

        // Based on the time, suggest a workout
        const workout = suggestWorkout(nextEvent);
        document.getElementById("workoutSuggestion").textContent = workout;
    }, 1000);
});

function suggestWorkout(event) {
    // A simple rule-based suggestion based on the next event time
    const eventTime = new Date('2025-01-23T15:00:00'); // Example: 3:00 PM

    // If event is soon, suggest a quick workout
    const availableTime = eventTime.getHours() < 17 ? "15 minutes" : "30 minutes";
    return `You have ${availableTime} before your next meeting. Here's a quick HIIT workout!`;
}

function createLoginTracker(userInfo) {
    let attemptCount = 0;
    const password = userInfo.password;

    return (passAttempt) => {
        attemptCount++;
        if (passAttempt === password) {
            return 'Login successful';
        } else if (attemptCount <= 3) {
            return `Attempt ${attemptCount}: Login failed`;
        } else {
            return 'Account locked due to too many failed login attempts';
        }
    };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
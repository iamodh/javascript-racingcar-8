export class Output {
  constructor() {}

  static formatMovementLogs(movementLogs, playerNumber) {
    const formatted = [];

    for (let i = 0; i < movementLogs.length; i++) {
      formatted.push(movementLogs[i]);

      const isRoundEnd = (i + 1) % playerNumber === 0;

      if (isRoundEnd) {
        formatted.push('');
      }
    }

    return ['', ...formatted].join('\n');
  }
}

class Ara {
  constructor(name = 'Ara', level = 1) {
    this.name = name;
    this.level = level;
    this.health = 100;
    this.mana = 50;
    this.abilities = {
      aura: {
        name: 'Aura',
        description: 'Emit a protective aura around you',
        manaCost: 20,
        cooldown: 5,
        active: false,
        level: 1,
        radius: 10
      }
    };
    this.stats = {
      strength: 10,
      intelligence: 15,
      wisdom: 12,
      dexterity: 11,
      constitution: 13,
      charisma: 14
    };
  }

  activateAura() {
    const aura = this.abilities.aura;
    if (this.mana < aura.manaCost) {
      return { success: false, message: 'Not enough mana!' };
    }
    if (aura.active) {
      return { success: false, message: 'Aura is already active!' };
    }
    this.mana -= aura.manaCost;
    aura.active = true;
    return { success: true, message: `${this.name} activated Aura! Radius: ${aura.radius}m` };
  }

  deactivateAura() {
    const aura = this.abilities.aura;
    if (!aura.active) {
      return { success: false, message: 'Aura is not active!' };
    }
    aura.active = false;
    return { success: true, message: `${this.name} deactivated Aura.` };
  }

  upgradeAura() {
    const aura = this.abilities.aura;
    aura.level += 1;
    aura.radius += 5;
    aura.manaCost += 5;
    return { success: true, message: `Aura upgraded to level ${aura.level}!` };
  }

  getStatus() {
    return {
      name: this.name,
      level: this.level,
      health: this.health,
      mana: this.mana,
      auraActive: this.abilities.aura.active,
      auraLevel: this.abilities.aura.level,
      auraRadius: this.abilities.aura.radius
    };
  }
}

module.exports = Ara;
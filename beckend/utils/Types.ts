const TYPES = {
    // Services
    ChatService: Symbol.for('ChatService'),
    ConfigService: Symbol.for('ConfigService'),
    PgService: Symbol.for('PgService'),
    SocketService: Symbol.for('SocketService'),
    BattleService: Symbol.for('BattleService'),
    SecurityService: Symbol.for('SecurityService'),
    TournamentService: Symbol.for('TournamentService'),
    UserService: Symbol.for('UserService'),
    BillingService: Symbol.for('BillingService'),
    DriverService: Symbol.for('DriverService'),
    PartService: Symbol.for('PartService'),
    ChestService: Symbol.for('ChestService'),
    ShopService: Symbol.for('ShopService'),
    StatisticService: Symbol.for('StatisticService'),
    GiftService: Symbol.for('GiftService'),
    BossService: Symbol.for('BossService'),
    MemoryStorage: Symbol.for('MemoryStorage'),
    // Repositories
    ConfigRepository: Symbol.for('ConfigRepository'),
    SessionRepository: Symbol.for('SessionRepository'),
    UserRepository: Symbol.for('UserRepository'),
    MessageRepository: Symbol.for('MessageRepository'),
    TournamentTypeRepository: Symbol.for('TournamentTypeRepository'),
    TournamentRepository: Symbol.for('TournamentRepository'),
    PartTypeRepository: Symbol.for('PartTypeRepository'),
    PartRepository: Symbol.for('PartRepository'),
    DriverTypeRepository: Symbol.for('DriverTypeRepository'),
    DriverRepository: Symbol.for('DriverRepository'),
    ChestRepository: Symbol.for('ChestRepository'),
    UserDataRepository: Symbol.for('UserDataRepository'),
    CrystalPackRepository: Symbol.for('CrystalPackRepository'),
    ChestPackRepository: Symbol.for('ChestPackRepository'),
    ChestTypeRepository: Symbol.for('ChestTypeRepository'),
    BattleRepository: Symbol.for('BattleRepository'),
    PurchaseRepository: Symbol.for('PurchaseRepository'),
    StarterPackRepository: Symbol.for('StarterPackRepository'),
    GiftRepository: Symbol.for('GiftRepository'),
    BossRepository: Symbol.for('BossRepository'),
    // Other
    Configuration: Symbol.for("Configuration"),
    SocialValidator: Symbol.for('SocialValidator'),
    AuthMiddleware: Symbol.for('AuthMiddleware'),
    CustomLoginMiddleware: Symbol.for('TokenLoginMiddleware'),
    Scheduler: Symbol.for('Scheduler'),
    ErrorHandler: Symbol.for('ErrorHandler'),
    SocketController: Symbol.for('SocketController'),
};

export default TYPES;

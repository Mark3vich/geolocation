export interface IDataText {
    report: string;         // Текст отчёта 
    device_id: number;      // Идентификационный код для центра управления
    date: number;           // Значение даты
    time: number;           // Значение времени
    latitude: string;       // Значение широты
    n_s: string;            // Значение севера или юга
    longitude: string;      // Значение долготы
    e_w: string;            // Значение запада или востока
    speed: number;          // Значение скорости
    course: number;         // Значение направления
    altitude: number;       // Значение высоты
    odometer: number;       // Значение пробега
    io_status: number;      // Значение статуса IO (XXX)
    event_id: number;       // Значение идентификатора события
    ain1: number;           // Напряжение на аналоговом входе 1
    ain2: number;           // Напряжение на аналоговом входе 2
    fix_mode: number;       // 1: Местоположение не определено. 2: 2D Fix 3: 3D Fix
    glonass_sat_no: number; // Число используемых спутников 
    gps_sat_no: number;     // Число используемых спутников GPS
    hdop: number;           // Величина горизонтального геометрического фактора 
    // 20 объектов
};


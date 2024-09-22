export interface IDataText {
    report: string;                 // Текст отчёта 
    device_id: number;              // Идентификационный код для центра управления
    date: string;                   // Значение даты
    time: string;                   // Значение времени
    latitude: string;               // Значение широты
    n_s: string;                    // Значение севера или юга
    longitude: string;              // Значение долготы
    e_w: string;                    // Значение запада или востока
    speed: number;                  // Значение скорости
    course: number;                 // Значение направления
    altitude: number | null;        // Значение высоты
    odometer: number | null;        // Значение пробега
    io_status: number | null;       // Значение статуса IO (XXX)
    event_id: number | null;        // Значение идентификатора события
    ain1: number | null;            // Напряжение на аналоговом входе 1
    ain2: number | null;            // Напряжение на аналоговом входе 2
    fix_mode: number | null;        // 1: Местоположение не определено. 2: 2D Fix 3: 3D Fix
    glonass_sat_no: number | null;  // Число используемых спутников 
    gps_sat_no: number | null;      // Число используемых спутников GPS
    hdop: number | null;            // Величина горизонтального геометрического фактора 
    // 19 объектов
};


@startuml
!define Table(name,desc) class name as "desc" << (T,#FFAAAA) >>
!define primary_key(x) <b><color:red>x</color></b>
!define foreign_key(x) <color:blue>x</color>
!define unique(x) <color:green>x</color>
!define not_null(x) <u>x</u>

Table(resident, "resident") {
    primary_key(resident_serial_number) : int(11)
    not_null(name) : varchar(100)
    not_null(resident_registration_number) : varchar(300)
    not_null(gender_code) : varchar(20)
    not_null(birth_date) : datetime
    not_null(birth_place_code) : varchar(20)
    not_null(registration_base_address) : varchar(500)
    death_date : datetime
    death_place_code : varchar(20)
    death_place_address : varchar(500)
}

Table(birth_death_report_resident, "birth_death_report_resident") {
    primary_key(resident_serial_number) : int(11)
    primary_key(birth_death_type_code) : varchar(20)
    not_null(report_resident_serial_number) : int(11)
    not_null(birth_death_report_date) : date
    birth_report_qualifications_code : varchar(20)
    death_report_qualifications_code : varchar(20)
    email_address : varchar(50)
    not_null(phone_number) : varchar(20)
}

Table(family_relationship, "family_relationship") {
    primary_key(base_resident_serial_number) : int(11)
    primary_key(family_resident_serial_number) : int(11)
    not_null(family_relationship_code) : varchar(20)
}

Table(household, "household") {
    primary_key(household_serial_number) : int(11)
    not_null(household_resident_serial_number) : int(11)
    not_null(household_composition_date) : date
    not_null(household_composition_reason_code) : varchar(20)
    not_null(current_house_movement_address) : varchar(500)
}

Table(household_movement_address, "household_movement_address") {
    primary_key(household_serial_number) : int(11)
    primary_key(house_movement_report_date) : date
    not_null(house_movement_address) : varchar(500)
    not_null(last_address_yn) : varchar(1)
}

Table(household_composition_resident, "household_composition_resident") {
    primary_key(household_serial_number) : int(11)
    primary_key(resident_serial_number) : int(11)
    not_null(report_date) : date
    not_null(household_relationship_code) : varchar(20)
    not_null(household_composition_change_reason_code) : varchar(20)
}

Table(certificate_issue, "certificate_issue") {
    primary_key(certificate_confirmation_number) : bigint
    not_null(resident_serial_number) : int
    not_null(certificate_type_code) : varchar(20)
    not_null(certificate_issue_date) : date
}

resident "1" <-- "0..*" birth_death_report_resident : resident_serial_number
resident "1" <-- "0..*" family_relationship : base_resident_serial_number
resident "1" <-- "0..*" family_relationship : family_resident_serial_number
resident "1" <-- "0..*" household : household_resident_serial_number
household "1" <-- "0..*" household_movement_address : household_serial_number
household "1" <-- "0..*" household_composition_resident : household_serial_number
resident "1" <-- "0..*" household_composition_resident : resident_serial_number
resident "1" <-- "0..*" certificate_issue : resident_serial_number
@enduml

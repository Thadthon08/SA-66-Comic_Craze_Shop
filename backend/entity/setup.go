package entity

import (
	"gorm.io/driver/sqlite"

	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {

	return db

}

func SetupDatabase() {

	database, err := gorm.Open(sqlite.Open("sa-66.db"), &gorm.Config{})

	if err != nil {

		panic("failed to connect database")

	}

	// Migrate the schema

	database.AutoMigrate(
		&Member{},
		&Basket{},
		&Comic{},
		&Payment{},
		&Appove{},
		&Status{},
		&Admin{},
		&Category{},
		&Review{},
		&Rating{},
	)

	db = database

	// Sucess := Status{
	// 	Status: "ชำระเงินแล้ว",
	// }
	// db.Model(&Status{}).Create(&Sucess)

	// Wait := Status{
	// 	Status: "รอการตรวจสอบ",
	// }
	// db.Model(&Status{}).Create(&Wait)

	// unsuc := Status{
	// 	Status: "ชำระเงินไม่สำเร็จ",
	// }
	// db.Model(&Status{}).Create(&unsuc)
}

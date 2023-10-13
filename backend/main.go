package main

import (
	"github.com/Thadthon08/sa-66-Comic/controller"
	"github.com/Thadthon08/sa-66-Comic/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {
	entity.SetupDatabase()
	r := gin.Default()

	r.Use(CORSMiddleware())

	r.POST("/Payment", controller.CreatePayment)
	r.GET("/Payment/:id", controller.GetPayment)
	r.GET("/Payments", controller.ListPayment)
	r.PATCH("/Payment", controller.UpdatePayment)
	r.DELETE("/Payments/:id", controller.DeletePayment)

	r.GET("/Statuses", controller.ListStatus)

	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

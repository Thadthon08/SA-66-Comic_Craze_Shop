package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/Thadthon08/sa-66-Comic/entity"
)

func GetBasket(c *gin.Context){
	var basket entity.Comic
	id := c.Param("id")
	if err := entity.DB().Preload("Category").Raw("SELECT * FROM baskets WHERE id = ?", id).Find(&basket).Error; err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": basket})
}
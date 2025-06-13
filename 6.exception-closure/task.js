// Задача 1
function parseCount(value) {
  const number = Number.parseFloat(value)
  if(Number.isNaN(number)) {
    throw new Error('Невалидное значение')
  }
  return number
}

function validateCount(value) {
  try {
      return parseCount(value)
  } catch (error) {
    return error
  }
}

// Задача 2
function isTriangele(a, b, c) {
  if(!(a + b > c && a + c > b && b + c > a)) {
    throw new Error('Треугольник с такими сторонами не существует')
  }
}
class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c

    isTriangele(a, b, c)
  }

  get perimeter() {
    return this.a + this.b + this.c
  }

  get area() {
    const p = this.perimeter / 2
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    return Number(s.toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch {
    const erroMsg = 'Ошибка! Треугольник не существует'   
    const ErrorObj = {
      get area() {
        return erroMsg
      },
      get perimeter() {
        return erroMsg
      }
    }
    return ErrorObj
  }
}

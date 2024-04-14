salários= [1000,2500,3600,4500]
impostos = list(map(lambda x: x*10/100,salários))
print(impostos)

'''
O map por padrão ele te retorna um objeto se não colocar o list
na variavél impostos
'''


salários = [8900,7888,5444,1547,5544]
aumento_salário = list(map(lambda x: x/2,salários))
print(aumento_salário)
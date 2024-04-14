Lista_supermercado = ['Banana','arroz','feijão','açucar','maçã','pera']
lista_de_pessoas_que_vão_comprar = ('Ana','Maria','Rosemeire','Braulino','Messias')
print(type(Lista_supermercado))
print(type(lista_de_pessoas_que_vão_comprar))

duas_listas = zip(lista_de_pessoas_que_vão_comprar,Lista_supermercado*2)
print(list(duas_listas))

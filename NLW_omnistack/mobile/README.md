<h1 align="center">
	😩 Problemas com execução do comando <strong>expo</strong>
</h1>

- <strong>expo</strong> não está assinado digitalmente. 
- Não é possível executar este script no sistema atual. 
- Para obter mais informações sobre como executar scripts e definir a política de execução, consulte
about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.

<h2>
    Restrição de Segurança
</h2>

- Quando executamos um script "não assinado", com a restrição de Política de Execução padrão - Restricted, mesmo que criado em seu computador, o PowerShell bloquei a execução disparando uma excepção.
- Para atribuir uma determinada Política de Execução, basta executar o cmdlet Set-ExecutionPolicy seguido pelo nome da política adequada à sua necessidade.

![WindowsPowerShellAdm](https://user-images.githubusercontent.com/49990149/89593101-b082b600-d824-11ea-8463-377dfec9bcf9.png)

    - 🙂 Set-ExecutionPolicy RemoteSigned

- O comando define a Política de execução para RemoteSigned.
- Assim que a política é aplicada, o PoweShell dispara a necessidade de uma confirmação manual para que sua alteração seja confirmada.
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

    - <strong>🙂 Set-ExecutionPolicy RemoteSigned</strong>

- O comando define a Política de execução para RemoteSigned.
- Assim que a política é aplicada, o PoweShell dispara a necessidade de uma confirmação manual para que sua alteração seja confirmada.
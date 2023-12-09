import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, PrimaryColumnCannotBeNullableError } from "typeorm";

@Entity("chamados")
export class Chamado {
    @PrimaryColumn()
    id: string;

    @Column()
    numero: string;

    @Column()
    task: string;

    @Column()
    sctask: string;

    @Column()
    data: Date;

    @Column()
    mesaTarefa: string

    @Column()
    mesaChamado: string

    @Column()
    status: string

    @Column()
    analista: string;

    @Column()
    equipe: string;

    @Column()
    supervisor: string;

    @Column()
    classificacao: string;

    @Column()
    sistema: string;

    @Column()
    corrigirArtigo: string;
    
    @Column()
    motivo: string;

    @Column()
    justificativa: string;

    @Column()
    analiseSupervisor: string;

    @Column()
    analiseSniper: string;

    @Column()
    analiseConclusao: string;

    @Column()
    criadoEm: Date;

    constructor(
        id: string,
        numero: string,
        task: string,
        sctask: string,
        data: Date,
        mesaTarefa: string,
        mesaChamado: string,
        status: string,
        analista: string,
        equipe: string,
        supervisor: string,
        classificacao: string,
        sistema: string,
        corrigirArtigo: string,
        motivo: string,
        justificativa: string,
        analiseSupervisor: string,
        analiseSniper: string,
        analiseConclusao: string,
        criadoEm: Date
    ){
        this.id = id,
        this.numero = numero,
        this.task = task,
        this.sctask = sctask,
        this.data = data,
        this.mesaTarefa = mesaTarefa,
        this.mesaChamado = mesaChamado,
        this.status = status,
        this.analista = analista,
        this.equipe = equipe,
        this.supervisor = supervisor,
        this.classificacao = classificacao,
        this.sistema = sistema,
        this.corrigirArtigo = corrigirArtigo,
        this.motivo = motivo,
        this.justificativa = justificativa,
        this.analiseSupervisor = analiseSupervisor,
        this.analiseSniper = analiseSniper,
        this.analiseConclusao = analiseConclusao,
        this.criadoEm = criadoEm
    }
}
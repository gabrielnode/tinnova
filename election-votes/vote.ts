class Vote {
    private totalVoters: number = 1000;
    private validVote: number = 800;
    private whiteVote: number = 150;
    private nullVote: number = 50;

    constructor() {
    }

    public getTotalVoters(): number {
        return this.totalVoters
    }
    
    public getPercentValid(): number {
        return this.validVote / this.totalVoters
    }
    
    public getPercentWhite(): number {
        return this.whiteVote / this.totalVoters
    }
    
    public getPercentNull(): number {
        return this.nullVote / this.totalVoters
    }

}

export { Vote }
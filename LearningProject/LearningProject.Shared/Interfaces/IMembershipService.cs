
namespace LearningProject.Shared.Interfaces
{
    public interface IMembershipService
    {
        void LogonFirstTime(string memberId, string password);
        void ForgottenPassword(string memberId, string password);
    }
}
